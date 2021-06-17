  var $videoSrc;var $videoSrc1;var $videoSrc2;var $videoSrc3;
  $('.video-btn').click(function() {
    $videoSrc = $(this).data( "src" );      
  });
  $('#video_pop').on('shown.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
  });
  $('#video_pop').on('hide.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc); 
  });


  $('.video-btn1').click(function() {
    $videoSrc1 = $(this).data( "src" );      
  });
  $('#video_pop1').on('shown.bs.modal', function (e) {
    $("#video1").attr('src',$videoSrc1 + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
  });
  $('#video_pop1').on('hide.bs.modal', function (e) {
    $("#video1").attr('src',$videoSrc1); 
  });

  $('.video-btn2').click(function() {
    $videoSrc2 = $(this).data( "src" );      
  });
  $('#video_pop2').on('shown.bs.modal', function (e) {
    $("#video2").attr('src',$videoSrc2 + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
  });
  $('#video_pop2').on('hide.bs.modal', function (e) {
    $("#video2").attr('src',$videoSrc2); 
  });

  $('.video-btn3').click(function() {
    $videoSrc3 = $(this).data( "src" );      
  });
  $('#video_pop3').on('shown.bs.modal', function (e) {
    $("#video3").attr('src',$videoSrc3 + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
  });
  $('#video_pop3').on('hide.bs.modal', function (e) {
    $("#video3").attr('src',$videoSrc3); 
  });


  $('#iframe-btn').on('shown.bs.modal', function (e) {
  $('#iframe-btn2').on('shown.bs.modal', function (e) {
  $('#iframe-btn3').on('shown.bs.modal', function (e) {
  $('#iframe-btn4').on('shown.bs.modal', function (e) {
  $('#lead-form').on('shown.bs.modal', function (e) {