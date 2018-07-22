// Saves options to chrome.storage
function save_options() {
  var color = document.getElementById('color').value;
  chrome.storage.sync.set({
    favoriteColor: color
  }, function() {
    var status = document.getElementById('status'); // Update status to let user know options were saved.
    status.textContent = 'Options saved.';
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red'
  chrome.storage.sync.get({
    favoriteColor: 'red',
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
