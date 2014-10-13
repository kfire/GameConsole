$(function() {
  $('#slides').slidesjs({
    width: 658,
    height: 500,
  });

  $('#slides_01').slidesjs({
    width: 940,
    height: 250
  });

  $('#slides_02').slidesjs({
    width: 312,
    height: 160
  });

  $('#slides_03').slidesjs({
    width: 416,
    height: 659
  });

  $('#slides_hair').slidesjs({
    width: 311,
    height: 469
  });

  $('#slides_eyeb').slidesjs({
    width: 311,
    height: 71
  });

  $('#slides_armac').slidesjs({
    width: 102,
    height: 81
  });

  $('#slides_nose').slidesjs({
    width: 311,
    height: 51
  });

  $('#slides_mouth').slidesjs({
    width: 311,
    height: 158
  });

  $('#top_prev').click(function(){
    $('#slides .slidesjs-previous').click()
  })

  $('#top_next').click(function(){
    $('#slides .slidesjs-next').click()
  })

  $('#pants_prev').click(function(){
    $('#slides_03 .slidesjs-previous').click()
  })

  $('#pants_next').click(function(){
    $('#slides_03 .slidesjs-next').click()
  })

  $('#eye_prev').click(function(){
    $('#slides_01 .slidesjs-previous').click()
  })

  $('#eye_next').click(function(){
    $('#slides_01 .slidesjs-next').click()
  })

  $('#foot_prev').click(function(){
    $('#slides_02 .slidesjs-previous').click()
  })

  $('#foot_next').click(function(){
    $('#slides_02 .slidesjs-next').click()
  })

  $('#hair_prev').click(function(){
    $('#slides_hair .slidesjs-previous').click()
  })

  $('#hair_next').click(function(){
    $('#slides_hair .slidesjs-next').click()
  })

  $('#eyeb_prev').click(function(){
    $('#slides_eyeb .slidesjs-previous').click()
  })

  $('#eyeb_next').click(function(){
    $('#slides_eyeb .slidesjs-next').click()
  })

  $('#armac_prev').click(function(){
    $('#slides_armac .slidesjs-previous').click()
  })

  $('#armac_next').click(function(){
    $('#slides_armac .slidesjs-next').click()
  })

  $('#nose_prev').click(function(){
    $('#slides_nose .slidesjs-previous').click()
  })

  $('#nose_next').click(function(){
    $('#slides_nose .slidesjs-next').click()
  })

  $('#mouth_prev').click(function(){
    $('#slides_mouth .slidesjs-previous').click()
  })

  $('#mouth_next').click(function(){
    $('#slides_mouth .slidesjs-next').click()
  })

});

//opacity: 0.0;
