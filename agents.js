//break
setInterval(()=>{
  let containerWidth = $("#image-slider-container").width()
  let left = $("#slider").css("left").split("px")[0]
  let imgCount = 3;

  if(left == containerWidth * -1 * (imgCount - 1)){
      $("#slider").animate({left : 0})
  }
  else{
      $("#slider").animate({left : left - containerWidth})
  }
},2000)

//cuper
setInterval(()=>{
  let containerWidth = $("#image-slider-container1").width()
  let left = $("#slider1").css("left").split("px")[0]
  let imgCount = 3;

  if(left == containerWidth * -1 * (imgCount - 1)){
      $("#slider1").animate({left : 0})
  }
  else{
      $("#slider1").animate({left : left - containerWidth})
  }
},2000)

//Gessa

setInterval(()=>{
  let containerWidth = $("#image-slider-container1").width()
  let left = $("#slider2").css("left").split("px")[0]
  let imgCount = 3;

  if(left == containerWidth * -1 * (imgCount - 1)){
      $("#slider2").animate({left : 0})
  }
  else{
      $("#slider2").animate({left : left - containerWidth})
  }
},2000)


//vossa
setInterval(()=>{
  let containerWidth = $("#image-slider-container3").width()
  let left = $("#slider3").css("left").split("px")[0]
  let imgCount = 3;

  if(left == containerWidth * -1 * (imgCount - 1)){
      $("#slider3").animate({left : 0})
  }
  else{
      $("#slider3").animate({left : left - containerWidth})
  }
},2000)

//Bromtine
setInterval(()=>{
  let containerWidth = $("#image-slider-container4").width()
  let left = $("#slider4").css("left").split("px")[0]
  let imgCount = 3;

  if(left == containerWidth * -1 * (imgCount - 1)){
      $("#slider4").animate({left : 0})
  }
  else{
      $("#slider4").animate({left : left - containerWidth})
  }
},2000)