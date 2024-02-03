if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
            .then(function (registration) {
                console.log('Registration successful. Scope is:', registration.scope);
            })
            .catch(function (error) {
                console.log('Registration failed. Error:', error);
            });
    }
else{   console.log('Service workers are not supported.');  }

window.addEventListener('online', function () {
        console.log('You are online!');
    });

window.addEventListener('offline', function () {
        console.log('Oh no, you lost your network connection.');
    });
