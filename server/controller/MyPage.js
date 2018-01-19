if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('서비스 워커 등록에 성공하였습니다! :D - ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('서비스 워커 등록에 실패하였습니다. :( - ', err);
    });
  });
}
