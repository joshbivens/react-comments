import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBUNJfWoMRc7Vs8Ml5Q-ZLkXj-zD6fgtW0",
	authDomain: "radiant-torch-3037.firebaseapp.com",
	databaseURL: "https://radiant-torch-3037.firebaseio.com",
	projectId: "radiant-torch-3037",
	storageBucket: "radiant-torch-3037.appspot.com",
	messagingSenderId: "419105606981",
	appId: "1:419105606981:web:5393c80bd973ae2a"
};

firebase.initializeApp(config);

export const database = firebase.database();