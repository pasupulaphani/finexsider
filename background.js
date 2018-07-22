'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {

    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
          new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { hostEquals: '139.59.146.81' }
          }),
          new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { urlContains: 'com' }
          }),
      ],
      actions: [ new chrome.declarativeContent.ShowPageAction() ]
    }]);



  });
});
