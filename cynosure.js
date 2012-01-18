$.fn.cynosure = function(options) {
var defaults = {
background:'white'
};					
var opts = $.extend(defaults, options);
return this.find('div').delay(300).hover( function(){
	$(this).animate({
	fontSize: "+=150%"
	});},
	function(){
		var orig = $.data(this, 'css');
		$(this).animate({
		fontSize: "-=150%"
		});
	}
	);
}
$.fn.cynosure.defaults = {
  background: 'white'
};