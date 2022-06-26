self.addEventListener('push', function(e) {
    var options = {
      body: 'This notification was generated from demo website!',
      icon: 'images\Honeywell-Emblem.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      }
    };
    e.waitUntil(
      self.registration.showNotification('Change Alert!', options)
    );
  });

  self.addEventListener('notificationclick', function(event) {
  console.log('notification click recived .');

event.notification.close();

event.waitUntill(
  clients.openWindow('https://www.honeywellforge.ai/')
);
  });

