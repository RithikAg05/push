self.addEventListener('push', function(e) {
    var options = {
      body: 'This notification was generated from demo website!',
      icon: 'Honeywell-Emblem.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'Explore', title: 'Visit the website',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Change Alert!', options)
    );
  });