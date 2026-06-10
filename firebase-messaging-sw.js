importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAUZeDv7r6U4zrK1H0NBWbHDto4UDPXrJs",
  authDomain: "grupo-homens-iev.firebaseapp.com",
  projectId: "grupo-homens-iev",
  storageBucket: "grupo-homens-iev.firebasestorage.app",
  messagingSenderId: "889693967385",
  appId: "1:889693967385:web:138debde9b67eda0d74688"
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'Grupo de Homens', {
    body: body || '',
    icon: icon || '/grupo-homens/icon-192.png',
    badge: '/grupo-homens/icon-192.png',
    vibrate: [200, 100, 200],
    data: payload.data || {}
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/grupo-homens/'));
});
