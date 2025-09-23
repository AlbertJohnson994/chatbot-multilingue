// Import modular Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore, enableNetwork } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export function initializeFirebase() {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Verificar estado de conexão
    enableNetwork(db)
      .then(() => {
        const statusElem = document.getElementById("firebaseStatus");
        if (statusElem) {
          statusElem.innerHTML =
            '<i class="fas fa-circle status-connected"></i><span>Conectado</span>';
        }
        console.log("Conectado ao Firebase Firestore");
      })
      .catch((error) => {
        const statusElem = document.getElementById("firebaseStatus");
        if (statusElem) {
          statusElem.innerHTML =
            '<i class="fas fa-circle status-disconnected"></i><span>Offline</span>';
        }
        console.error("Erro de conexão: ", error);
      });
  } catch (error) {
    console.error("Erro ao inicializar Firebase: ", error);
  }
}
