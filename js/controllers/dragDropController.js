var DragDropController = function(view, model ) {
var index = 3;

	view.mABtn.click(function(){	//switches views
		$('#dragDropView').addClass('blurry');
		$('#makeActivityView').show();
	});

	view.mABtn2.click(function(){  //creates new days and divs to hold the activities for those days and connects them with .sortable()
		$('#dragDropView').append('<div id="daydiv'+index+'" class="daydiv"></div>');
		$('#daydiv'+index).append('<div id="stats'+index+'" class="stats"></div>');
		$('#daydiv'+index).append('<div id="div'+index+'" class="droparea"></div>');

		index++;
		makeDay(model);
	});

	view.timeVal.on("click", function () { alert('test'); });

}

	function makeDay(model) {

		var dayView = new DayView($('.droparea'),model);
		var dayController = new DayController(dayView,model);
	}
