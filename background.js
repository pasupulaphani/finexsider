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

var bkg = chrome.extension.getBackgroundPage();

chrome.runtime.onInstalled.addListener(function(details) {
  // register callback for alarm
  chrome.alarms.onAlarm.addListener(onAlarm);

  // synchronize every 1 minute
  chrome.alarms.create("extension.alarm1", {periodInMinutes: 1});

  console.log("extension is running");
 });


function onAlarm(alarm) {
  start();
 };


function start() {
  chrome.alarms.create("Start", {periodInMinutes:1});
  let number;
  $.ajax({
    url: "http://172.29.6.34:3000/data",
    dataType : 'json',
    success: function(data) {
      bkg.console.log('data', data);
      number = data;
      const zrx1dsell = data
        .filter(a => {
          return hoursFromNow(a.timeStamp) < 24
        })
        .reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.value;
        }, 0);
      console.log(zrx1dsell)
      chrome.storage.sync.set({
        zrx1dsell: zrx1dsell
      }, function() {
        console.log("set", zrx1dsell)
      });


      const zrx1wsell = data
        .filter(a => {
          return hoursFromNow(a.timeStamp) < (24 * 7)
        })
        .reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.value;
        }, 0);
      console.log(zrx1wsell)
      chrome.storage.sync.set({
        zrx1wsell: zrx1wsell
      }, function() {
        console.log("set", zrx1wsell)
      });
    },
    error: function(e) {
      bkg.console.log('e', e);
    }
  });

  chrome.notifications.create({
    type: "basic",
    title: "Large Tx Report",
    iconUrl: "images/finexsider32.png",
    message: 'USDT:' + number
  });
}
start();


function hoursFromNow(timestamp) {
  var currentTime = moment();
  var timeStore = moment.unix(timestamp);
  // console.log(timestamp, moment.unix(timestamp), currentTime.diff(timeStore, 'h'))
  return currentTime.diff(timeStore, 'h');
}
