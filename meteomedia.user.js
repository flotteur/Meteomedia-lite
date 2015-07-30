// ==UserScript==
// @name        meteomedia
// @namespace   metmed
// @description Meteomedia done right
// @include     http://www.meteomedia.com/*
// @version     1
// @grant       none
// @require     http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.4.min.js
// ==/UserScript==
function DestroyeEverything() {
  $('.headline-area').remove();
  $('.module.coffee-break').remove();
  $('.social-share').remove();
  $('#leaderboard').remove();
  $('#sidebar').remove();
  $('#videos_brightcove-multiple-playlist-3-video-city-page').remove();
  $('#map-view').remove();
  $('#gallery').remove();
  $('#news-slider').remove();
  $('#main-footer').remove();
  $('#news').remove();
  $('#videos_brightcove-multiple-playlist-3-video-homepage').remove();
}
$(document).ready(DestroyeEverything());
