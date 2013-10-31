// ==UserScript==
// @name        Ship It Button
// @namespace   http://userscripts.org/users/537150
// @description Adds a ship it button to GitHub pull requests
// @include     https://github.com/*/*/pull/*
// @version     1
// @grant       none
// ==/UserScript==

var $img = $('<img>')
      .attr({
        width: "20",
        height: "20",
        align: "absmiddle",
        src: "https://github.global.ssl.fastly.net/images/icons/emoji/shipit.png",
        alt: ":shipit:",
        title: ":shipit:"
      }).addClass("emoji"),
    $button = $("<button>").addClass('button').append($img),
    $div = $('#js-new-comment-form-actions');
$button.on('click', function(e){
  e.preventDefault();
  var $textarea = $('.js-comment-field');
  $textarea.val(':shipit:');
  $textarea.parents('form').submit();
});
$div.append($button);
