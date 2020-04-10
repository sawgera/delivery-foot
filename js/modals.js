$(document).ready(function(){
    var btn = $('#btn');
    var modals = $('#modals');
    var closes = $('#closes');
     
    btn.on('click', function(){
        modals.addClass('modal_active');
     });
  
     closes.on('click', function(){
         modals.removeClass('modal_active');
       });
});