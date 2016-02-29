
$(function(){
  $('#demo-menu li').hoverDelay({
      delayIn: 200,
      delayOut:700,
      handlerIn: function($element){
          console.log('in started');
          $element.css({backgroundColor: '#FF0000'});  
          console.log('in finished');
      },
      handlerOut: function($element){
          console.log('out started');
          $element.css({backgroundColor: 'auto'});  
          console.log('out finished');
      }
  });  
});
