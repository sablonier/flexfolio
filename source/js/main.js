//((===  JS Entry Point  ===))//


//=== Function Imports

import './functions/_syntax-highlight';
import './functions/_clipboard';

$('.button-bars').click(function () {
    $('.docs__sidebar--menu').slideToggle();
});

$('.button-search').click(function () {
    $('.docs__sidebar--search').slideToggle();
});

$('h2').each(function(i, el) {
    var $el, icon, id;
    $el = $(el);
    id = $el.attr('id');
    icon = '¶';
    if (id) {
        return $el.append($("<a />").addClass("anchor").attr("href", "#" + id).html(icon));
    }
});
