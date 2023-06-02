import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDFZRCjEA1fq_6t4229inqdQk1FCB1XUtk',
	authDomain: 'nextjs-fireshipp.firebaseapp.com',
	projectId: 'nextjs-fireshipp',
	storageBucket: 'nextjs-fireshipp.appspot.com',
	messagingSenderId: '748852122504',
	appId: '1:748852122504:web:26565bea384890d280a03d',
	measurementId: 'G-5F3TW7Z88W',
}

if(!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()