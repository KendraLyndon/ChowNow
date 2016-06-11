$(document).ready(function(){
  $('nav').on('mouseover',function(){
    $(this).fadeTo('fast',1);
  })
  $('nav').on('mouseleave',function(){
    $(this).fadeTo('fast',0.8);
  })
})
