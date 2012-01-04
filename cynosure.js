$.fn.cynosure = function(options) {
var defaults = {
background:'white'
};
var opts = $.extend(defaults, options);
return this.animate({
width: "80%",
marginLeft: "0.6in",
fontSize: "3em",
borderWidth: "10px"

});
};

$.fn.cynosure.defaults = {
  background: 'white'
};