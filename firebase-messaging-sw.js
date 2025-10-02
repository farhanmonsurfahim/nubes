// Import and initialize the Firebase SDK for the service worker
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-sw.js";

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
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// This function will be triggered when a notification is received while the app is in the background
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize the notification
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://raw.githubusercontent.com/farhanmonsurfahim/assignment/main/nub.jpeg' // Using your NUB logo
  };

  // Display the notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});

