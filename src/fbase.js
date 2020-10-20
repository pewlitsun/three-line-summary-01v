import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC2Y1o8bIFvfZSQgrKNYGIY39xY2Jyfe8k",
    authDomain: "three-line-summary-01v.firebaseapp.com",
    databaseURL: "https://three-line-summary-01v.firebaseio.com",
    projectId: "three-line-summary-01v",
    storageBucket: "three-line-summary-01v.appspot.com",
    messagingSenderId: "1079759421086",
    appId: "1:1079759421086:web:5f4576cbe26152280a058f",
    measurementId: "G-1PCS7G43CG"
  };

  export default firebase.initializeApp(firebaseConfig);