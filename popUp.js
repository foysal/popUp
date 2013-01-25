(function($)
{
  var after_pop_up_div_height = 500;
  var after_pop_up_div_width = 500;
  
  
  //get half height and half width of window
  var window_half_height = Math.ceil(window.innerHeight/2);			
  var window_half_width = Math.ceil(window.innerWidth/2);
  
  //initial height & width
  var popup_div_height = 50;			
  var popup_div_width = 50;
  
  //inital popup positions
  var pop_up_top = window_half_height - popup_div_height/2;
  var pop_up_left = window_half_width - popup_div_width/2;
  
  
  $.fn.popUp = function(config) 
  {  	
	
	var params = $.extend({after_pop_up_div_height:'500',after_pop_up_div_width:'500'},config);
	
	return this.each(function() 
	{					
		var pop_status = 0;
		
		if(pop_status != 1)
		{
			//final popup position
			var after_pop_up_top = window_half_height - params.after_pop_up_div_height/2;			
  			var after_pop_up_left = window_half_width - params.after_pop_up_div_width/2;	
			
			var $this = $(this);			
			$this.click(function(e)
			{ 
				$('<div id="mask" />')  
				  .appendTo('body')
				  .hide()
				  .css(
				  {  
					backgroundColor: '#000',
					height: '100%',
					width:'100%',
					top:0,
					left:0,
					zIndex : 0,
					position: 'absolute',
					opacity:.50   
				  }).fadeIn(1000); 
				
				
				$('<div id="popup" />')  
				  .appendTo('body')
				  .hide()
				  .css(
				  {  
					backgroundColor: '#fffffF',  
					top: pop_up_top,  
					left: pop_up_left,
					position: 'absolute',
					height: popup_div_height,
					width: popup_div_width,
					zIndex : 1,
					borderRadius: 10  
				  }).fadeIn(1000).animate(
				  {
					top: after_pop_up_top, 
					right: after_pop_up_left,
					left: after_pop_up_left,
					height: params.after_pop_up_div_height,
					width: params.after_pop_up_div_width
				  },500,function()
				  {
					$('<img id="pupup_cancle" src="cross.GIF" height="16" width="16" align="right"/>')  
				  	.appendTo('#popup')
				  	.hide()
					.fadeIn(1000);
				  });
				  			    
			});
			pop_status = 1;
		}
		
		//for remove the popup
		$('#pupup_cancle').live('click',function()
		{
		
			$('#mask').fadeOut('slow',function()
			{
				$(this).remove();
			});
			
			$('#popup').fadeOut('slow',function()
			{
				$(this).remove()	
			});
			
			pop_status = 0;
		});
    });
  };
})(jQuery);