const modalButtons=document.querySelectorAll(".modal"),closeModal=document.querySelectorAll(".close_modal");$(document).ready(function(){for($(".slider").slick({dots:!0,infinite:!1,speed:300,slidesToShow:1,centerMode:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,centerPadding:"10px"}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"10px"}}]}),$(".slider").on("beforeChange",function(e,o,s,t){console.log("should be blue"),$("button.slick-next").removeClass("green"),$("button.slick-prev").removeClass("green"),$("button.slick-next").addClass("blue"),$("button.slick-prev").addClass("blue"),console.log(t),console.log(s)}),i=0;i<modalButtons.length;i++)modalButtons[i].addEventListener("click",function(){console.log("this"),this.previousElementSibling.style.display="block"});closeModal.forEach(e=>e.addEventListener("click",function(e){console.log("this"),$(this).closest(".open_modal").fadeOut(300),e.stopPropagation(),$(".overlay").removeClass("gray"),$("body").css("overflow","auto")}))}),$("html").click(function(){document.getElementById("main_slide").classList.remove("fading")}),$("#main_slide").click(function(e){e.stopPropagation(),document.getElementById("main_slide").classList.add("fading")});