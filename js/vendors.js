!function(a){a.fn.animated=function(n){a(this).each(function(){var t=a(this);t.css("opacity","0").addClass("animated").waypoint(function(a){"down"===a&&t.addClass(n).css("opacity","1")},{offset:"90%"})})}}(jQuery);