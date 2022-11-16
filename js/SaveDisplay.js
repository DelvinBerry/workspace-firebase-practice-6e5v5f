// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();
 var inputdata = $('form').serializeArray();
 console.log(inputdata);
 var inputJson = {};


 inputdata.forEach((entry) =>{
  inputJson[entry.name] = entry.value;
 });
  console.log (inputJson)

  firebase
  .firestore()
  .collection('workpapers')
  .add(inputJson);
  // get the value of the form using serializeArray method
  



});

// update the result in table

firebase.firestore().collection("workpapers").onSnapshot(function(querySnapsot){
querySnapsot.forEach(function(doc){
  console.log ("document -- ", doc.data().choice);
  var n1=0; var n2 =0; var n3=0; var n4=0; var n5=0;
  var s = doc.data().choice;
  switch(s){
    case "A": n1 ++; $('#ans1').text(n1);break;
    case "B": n2 ++; $('#ans2').text(n2);break;
    case "C": n3 ++; $('#ans3').text(n3);break;
    case "D": n4 ++; $('#ans4').text(n4);break;
    case "E": n5 ++; $('#ans5').text(n5);break;
  }

});
});
