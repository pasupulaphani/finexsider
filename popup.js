'use strict';

// let changeColor = document.getElementById('changeColor');

let illustration = document.getElementById('illustration');
let illustration2 = document.getElementById('illustration2');

chrome.storage.sync.get('zrx1dsell', function(data) {
  // changeColor.setAttribute('value', data.color);
  illustration.innerHTML = Math.round(data.zrx1dsell);
});
chrome.storage.sync.get('zrx1wsell', function(data) {
  // changeColor.setAttribute('value', data.color);
  illustration2.innerHTML = Math.round(data.zrx1wsell);
});


changeColor.onclick = function(element) {
  let illustration = document.getElementById('illustration');


  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // chrome.tabs.executeScript(
    //     tabs[0].id,
    //     {code: 'document.body.style.backgroundColor = "' + color + '"; console.log("hi")' });
  });
};
