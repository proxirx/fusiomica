(function () {
  var nextInput = document.getElementById('next-url');
  if (!nextInput) return;

  var origin = window.location.origin;
  if (/^https?:\/\//.test(origin)) {
    nextInput.value = origin + '/poster/download.html';
  }
})();
