// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//import firebase from 'firebase'


export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCwngfRDv56ILjsUj6dxyvBQRM-MuFrcWg",
    authDomain: "test-appreact.firebaseapp.com",
    databaseURL: "https://test-appreact.firebaseio.com",
    projectId: "test-appreact",
    storageBucket: "test-appreact.appspot.com",
    messagingSenderId: "392050295203",
    appId: "1:392050295203:web:aeb830745e7a35df091a16",
    measurementId: "G-9SV4SD448Y"
  }
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
