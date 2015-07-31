// ==UserScript==
// @name        meteomedia
// @namespace   metmed
// @description Meteomedia done right
// @author       Gabriel Talbot
// @include     http://www.meteomedia.com/*
// @version     1.07
// @grant       none
// @require     http://ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.4.min.js
// ==/UserScript==
"use strict";

function ObserveBodyChange(mutations)
{
    $('#feedbackify').remove();
}

function DestroyEverything() {
  $('.headline-area').remove();
  $('.module.coffee-break').remove();
  $('.social-share').remove();
  $('.moon_phases').remove();
  $('.settings').remove();
  $('.signin:parent').remove();
  
  $('a[title="Nouvelles"]:parent').remove();
  $('a[title="Galeries"]:parent').remove();
  $('a[title="Télé"]:parent').remove();
  $('a[title="FAQ"]:parent').remove();
  $('h3:contains("Style de vie")').parent().remove();
  
  $('#leaderboard').remove();
  $('#sidebar').remove();
  $('#videos_brightcove-multiple-playlist-3-video-city-page').remove();
  $('#map-view').remove();
  $('#gallery').remove();
  $('#news-slider').remove();
  $('#main-footer').remove();
  $('#news').remove();
  $('#videos_brightcove-multiple-playlist-3-video-homepage').remove();
  
  $("body").each(function(){
    this.observer = new MutationObserver(ObserveBodyChange);
    var config = { attributes: false, childList: true, characterData: false, subtree: true};
    this.observer.observe(this, config);
  });
}

$(document).ready(DestroyEverything());