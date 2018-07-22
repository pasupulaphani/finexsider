'use strict';

// let changeColor = document.getElementById('changeColor');

let illustration = document.getElementById('illustration');
illustration.innerHTML = "Phani";

chrome.storage.sync.get('zrx1dsell', function(data) {
  // changeColor.setAttribute('value', data.color);
  illustration.innerHTML = data.zrx1dsell;

});

changeColor.onclick = function(element) {
  let illustration = document.getElementById('illustration');
  illustration.innerHTML = "Phani";


  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // chrome.tabs.executeScript(
    //     tabs[0].id,
    //     {code: 'document.body.style.backgroundColor = "' + color + '"; console.log("hi")' });
  });
};
