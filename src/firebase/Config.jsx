import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAFGrDxGsnraYsgg9t3VW4ogQGgvVGxAwU",
    authDomain: "luluchieco-ecommerce.firebaseapp.com",
    projectId: "luluchieco-ecommerce",
    storageBucket: "luluchieco-ecommerce.appspot.com",
    messagingSenderId: "59644298682",
    appId: "1:59644298682:web:9b5a4ea136391dd48d8983"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const dataBase = getFirestore(app)
