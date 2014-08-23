
			$('#slider').draggable();
			$(function() {
				$("#slider").slider({
					value : 50,
					min : 0,
					max : 100,
					step : 1,
					slide : function(event, ui) {
						$("#potatoes_amount").val(ui.value);
						calc();
					}
				});
				$("#potatoes_amount").val("" + $("#slider").slider("value"));
				$("#potatoes_amount").val("" + $("#slider").slider("value"));
			});
			
			$('#slider2').draggable();
			$(function() {
				$("#slider2").slider({
					value : 0,
					min : 0,
					max : 100,
					step : 1,
					slide : function(event, ui) {
						$("#beets_amount").val(ui.value);
						calc();
					}
				});
				$("#beets_amount").val("" + $("#slider2").slider("value"));
			});
			
			$('#slider3').draggable();
			$(function() {
				$("#slider3").slider({
					value : 0,
					min : 0,
					max : 100,
					step : 1,
					slide : function(event, ui) {
						$("#lettuce_amount").val(ui.value);
						calc();
					}
				});
				$("#lettuce_amotun").val("" + $("#slider3").slider("value"));
			});
			
			