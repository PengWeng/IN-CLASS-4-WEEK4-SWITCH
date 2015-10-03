$('button').on('click',function(e){

	if ($('button').hasClass('on') == true) {

		//change switch to ON when click the switch
		$('button').removeClass('on');
		$('button').addClass('off');

		//Change background to dark when click the switch
		$('body').toggleClass('dark');
		$('body').removeClass('light');

		//Change texts
		$('.status').text('Hey, who turn off the lights?');
	}

	else {
		//change switch to OFF when click the switch
		$('body').toggleClass('light');
		$('body').removeClass('dark');

		//Change background to light when click the switch
		$('button').removeClass('off');
		$('button').addClass('on');

		//Change texts
		$('.status').text("It's so bright in here!");
		
	};


});




