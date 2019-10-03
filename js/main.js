(function () {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js', { scope: "./" }) 
    .then(function(registration) {
      console.info('Service worker is registered!');
      checkForPageUpdate(registration); 
    })
    .catch(function(error) {
      console.error('Service worker failed ', error);
    });
  }

  function checkForPageUpdate(registration) {
    registration.addEventListener("updatefound", function() {
      if (navigator.serviceWorker.controller) {
        var installingSW = registration.installing;
        installingSW.onstatechange = function() {
          console.info("Service Worker State :", installingSW.state);
          switch(installingSW.state) {
            case 'installed':
              toast('Site is updated. Refresh the page.', 5000);
              break;
            case 'redundant':
              throw new Error('The installing service worker became redundant.');
          }
        }
      }
    });
  }
})();
