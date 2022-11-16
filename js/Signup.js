var firebaseConfig = {
  apiKey: "AIzaSyAm-_wffmtWUWNcc374FfzhOq9oTiPZa7M",
  authDomain: "yahello-f9fcd.firebaseapp.com",
  projectId: "yahello-f9fcd",
  storageBucket: "yahello-f9fcd.appspot.com",
  messagingSenderId: "171733577914",
  appId: "1:171733577914:web:8d812060f5d0fd303a9283",
  measurementId: "G-DZEC0BQY2D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  document.getElementById("email").value;
  document.getElementById("password").value;
  // change the following code
  var email = "delvin@gmail.com";
  var password = "Yesyes";

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
