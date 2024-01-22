
///<reference types="../@types/jquery" />
$("#side-btn").on("click",function(){
  
  $(".side").animate({width:"toggle"},300)
  $("#side-btn").css({display:"none"})
})

$(".close-btn ").on("click",function(){
  
  $(".side").animate({width:"toggle"},300)
  $("#side-btn").css({display:"inline"})
})

// =====================================
$(function() {
  $( ".singers p" ).eq(0).slideToggle(400)
  });
$(".singers h2").eq(0).on("click",function(){
  $( ".singers p" ).eq(0).slideToggle(400);
  $( ".singers p" ).eq(1).slideUp(400);
  $( ".singers p" ).eq(2).slideUp(400);
  $( ".singers p" ).eq(3).slideUp(400);
})
$(".singers h2").eq(1).on("click",function(){
  $( ".singers p" ).eq(1).slideToggle(400);
  $( ".singers p" ).eq(0).slideUp(400);
  $( ".singers p" ).eq(2).slideUp(400);
  $( ".singers p" ).eq(3).slideUp(400);
})
$(".singers h2").eq(2).on("click",function(){
  $( ".singers p" ).eq(2).slideToggle(400);
  $( ".singers p" ).eq(1).slideUp(400);
  $( ".singers p" ).eq(0).slideUp(400);
  $( ".singers p" ).eq(3).slideUp(400);
})
$(".singers h2").eq(3).on("click",function(){
  $( ".singers p" ).eq(3).slideToggle(400);
  $( ".singers p" ).eq(1).slideUp(400);
  $( ".singers p" ).eq(2).slideUp(400);
  $( ".singers p" ).eq(0).slideUp(400);
})

// =====================================
let partyTime=new Date('10 25 ,2024 23:59:59').getTime()
let timenow;
let difference;
let days;
let hours;
let minutes;
let seconds;
let counter=setInterval(function(){
   timenow=new Date().getTime()
   difference=partyTime-timenow;
   days=Math.floor(difference / (1000 * 60 * 60 * 24));
  
  $(".days h3").text(`${days} D`)
  if (days<10){
    $(".days h3").text(`0${days} D`)
   }

  hours=Math.floor((difference%(1000 * 60 * 60 * 24))/(1000 * 60 * 60))

  $(".hours h3").text(`${hours} H`)
  if (hours<10){
    $(".hours h3").text(`0${hours} H`)
   }

  minutes=Math.floor((difference%(1000 * 60 * 60 ))/(1000 * 60 ))
  
  $(".minutes h3").text(`${minutes} M`)
  if (minutes<10){
    $(".minutes h3").text(`0${minutes} M`)
   }

  seconds=Math.floor((difference%(1000 * 60 ))/(1000 ))
  
  $(".seconds h3").text(`${seconds} S`)
  if (seconds < 10){
    $(".seconds h3").text(`0${seconds} S`)
  }
  if (difference <= 0) {
    alert("Timed Out");
  }
},1000)
 
//===============================

let maxcount=100;
let textAreaLimit=document.getElementById("textArea");
textAreaLimit.addEventListener("keydown",function(e){
if(maxcount==0 && e.key!="Backspace"){
  e.preventDefault();
  $("#span-warning").text(" can not add more characters")
  $("#span-warning").css("color","red");
  return;
}
if(maxcount==100 && e.key=="Backspace"){
  e.preventDefault();
  return;
}
if(e.key =="Backspace"){
maxcount=maxcount+1;
$("#span-count").text(`${maxcount}`);
$("#span-warning").text(" Character Reamining")
$("#span-warning").css("color","black");
}else{
  maxcount=maxcount-1;
  $("#span-count").text(`${maxcount}`);
  $("#span-warning").text(" Character Reamining")
  $("#span-warning").css("color","black");
}
 });

 //================
 
$(".side a").on("click",function(e){
 let sectionhref= e.target.getAttribute("href")
  let sectionoffset=$(sectionhref).offset().top;
  $("body").animate({scrollTop:sectionoffset},1500)
})



$(function () {
  $(".loader").fadeOut(1500, function () {
    $(".loading").slideUp(1500, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
      
      $("body").scrollTop(0);
    });
  });
});