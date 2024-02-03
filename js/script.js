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
