$.fn.cynosure = function(options) {
var defaults = {
background:'white'
};					
var opts = $.extend(defaults, options);
return this.find('div').hover( function(){
	$(this).animate({
	marginLeft: "0.6in"
	});},
	function(){
		var orig = $.data(this, 'css');
		$(this).animate({
		marginLeft: "-=0.6in"
		});
	}
	);
}
$.fn.cynosure.defaults = {
  background: 'white'
};