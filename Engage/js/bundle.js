'use strict'

var path = window.location.pathname,
    page = path.split("/").pop();

if (page === "3.html") {
    page = "wine"
} else {
    page = "apps"
}

var items = sessionStorage.getItem(page),
    order = JSON.parse(items) || [0];

for (var i = 0; i < order.length; i++) {
    window.cnt = (window.cnt || 0) + order[i];
    $('form input')[i].valueAsNumber = order[i];
    if (order[i] > 0) { $('form > h6 > span')[i].innerHTML = 'x ' + order[i] };
}

$('form').change(function() {

    if (page === "wine") {
        window.wine = [];
    } else {
        window.apps = [];
    };

    for (var i = 0; i < $('form input').length; i++) {
        var a = $('form input'),
            v = a[i].valueAsNumber;

        if (v > 0) {
            window.cnt = v;
            $('form > h6 > span')[i].innerHTML = 'x ' + v;
        } else {
            $('form > h6 > span')[i].innerHTML = '';
        };

        if (page === "wine") {
            window.wine.push(v);
            var str = JSON.stringify(window.wine);
            sessionStorage.setItem(page, str);
        } else {
            window.apps.push(v);
            var str = JSON.stringify(window.apps);
            sessionStorage.setItem(page, str);
        }
    }
});