import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

require("dotenv").config();

const firebase = require("firebase");
require("firebase/firestore");

//set firebase
const firebaseConfig = {
  apiKey: "AIzaSyB7bPm935DT2r_2m5piS3Mffa40r5t77pw",
  authDomain: "f-note-fa5ea.firebaseapp.com",
  databaseURL: "https://f-note-fa5ea.firebaseio.com",
  projectId: "f-note-fa5ea",
  storageBucket: "f-note-fa5ea.appspot.com",
  messagingSenderId: "52206732270",
  appId: "1:52206732270:web:98bc9e58e71438975a84ff"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("f_note-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
