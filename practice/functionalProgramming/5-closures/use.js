function sendRequest() {
  let requestID = '123';
  $.ajax({
    url: '/myUrl',
    success: function(response) {
      alert('Request ' +requestID+ ' returned')
    }
  });
}