import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyD-pdI3wp3JIEyXhpMzqvia-bbsZxL34pg",
    authDomain: "hamro-kisan-sathi.firebaseapp.com",
    databaseURL: "https://hamro-kisan-sathi.firebaseio.com",
    projectId: "hamro-kisan-sathi",
    storageBucket: "hamro-kisan-sathi.appspot.com",
    messagingSenderId: "442994921441",
    appId: "1:442994921441:web:0c7ffd2c64701f0456cca0",
    measurementId: "G-T12VQBGPNF"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase