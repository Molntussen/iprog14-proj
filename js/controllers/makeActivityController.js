var MakeActivityController = function(view, model ) {

	view.dDBtn.click(function(){
		$('#makeActivityView').hide();
		$('#dragDropView').show();
		
	});

	view.dDBtn2.click(function(){
		$('#makeActivityView').hide();
		$('#dragDropView').show();
		model.addActivity(new Activity(nameField.value,lengthField.value,typeList.value,descField.value));
		$('.mAF').val("");
	});

}
