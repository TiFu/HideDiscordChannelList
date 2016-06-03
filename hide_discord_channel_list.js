// ==UserScript==
// @name        HideDiscordChannelSelect
// @namespace   tifu
// @include     https://discordapp.com/channels/*
// @version     1
// @grant       none
// ==/UserScript==

function toggleServerList() { 
  $('.flex-vertical.channels-wrap').animate({width: 'toggle'});; 
}

function loadJQuery(document) {
      var script_jQuery = document.createElement('script'); 
     script_jQuery.setAttribute('src', '//code.jquery.com/jquery-latest.min.js'); 
     document.body.appendChild(script_jQuery);
}

window.onload = function() {
  loadJQuery(document);
}

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;

    if (e.ctrlKey && code === 72) { // ctrl + h
       toggleServerList();
    }
};
