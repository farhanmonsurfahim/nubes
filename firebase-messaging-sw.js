// This file must be named firebase-messaging-sw.js and be placed in the root of your project.

// Import and initialize the Firebase SDK
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuMJ6Ok2juoW8axxa8X-sNW0iklFjAOxo",
    authDomain: "nub-evening-society.firebaseapp.com",
    projectId: "nub-evening-society",
    storageBucket: "nub-evening-society.appspot.com",
    messagingSenderId: "472314792829",
    appId: "1:472314792829:web:861341df07455e0d805a14",
    measurementId: "G-XP13M59QG4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the background (Web app is closed or not in browser focus) then you should implement this optional method.
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // You can add a logo for your society here
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
