'use strict';

let illustration = document.getElementById('illustration');
let illustration2 = document.getElementById('illustration2');

chrome.storage.sync.get('zrx1dsell', function(data) {
  illustration.innerHTML = Math.round(data.zrx1dsell);
});
chrome.storage.sync.get('zrx1wsell', function(data) {
  illustration2.innerHTML = Math.round(data.zrx1wsell);
});


plusbutton.onclick = function(element) {
  // let illustration = document.getElementById('illustration');
  console.log(hi)

  // let color = element.target.value;
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // chrome.tabs.executeScript(
    //     tabs[0].id,
    //     {code: 'document.body.style.backgroundColor = "' + color + '"; console.log("hi")' });
  // });
};
