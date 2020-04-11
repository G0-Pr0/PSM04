
/*
  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

     */

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCoMy453eGfkoDV44VQ3Vtm0VlEzCIcCeY",
    authDomain: "fir-mobile-services.firebaseapp.com",
    databaseURL: "https://fir-mobile-services.firebaseio.com",
    projectId: "fir-mobile-services",
    storageBucket: "fir-mobile-services.appspot.com",
    messagingSenderId: "274365511607",
    appId: "1:274365511607:web:5eb4e871e104fa6be35a32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var firestore = firebase.firestore();

  const docRef = firestore.doc("books/booksDetails");
  const inputTextAuthorName = document.querySelector("#authorName");
  const inputTextBookTitle = document.querySelector("#bookTitle");
  const inputTextBookType = document.querySelector("#bookType");
  const inputTextBookYear = document.querySelector("#bookYear");
  const inputTextIsbn = document.querySelector("#isbn");
  const saveButton = document.querySelector("#saveButton");
  const loadButton = document.querySelector("#loadButton");

  saveButton.addEventListener("click", function() {

    console.log("I am going to save details to FIRESTORE");
    docRef.set({
      authorName: inputTextAuthorName.value,
      bookTitle: inputTextBookTitle.value,
      bookType: inputTextBookType.value,
      bookYear: inputTextBookYear.value,
      isbn: inputTextIsbn.value
    }).then(function() {
      console.log("status saved!");
    }).catch(function (error){
      console.log("got an error: ", error);
    });
  })

  loadButton.addEventListener("click", function() {

    console.log("I am going to load details from FIRESTORE");
    docRef.get().then(function(doc) {
      if (doc && doc.exists){
        const myData = doc.data();
        outputFromDatabase.innerText = myData.authorName + "\n" + myData.bookTitle + "\n" +
        myData.bookType + "\n" + myData.bookYear + "\n" + myData.isbn;
      }
      
    }).then(function() {
      console.log("details loaded!");
    }).catch(function (error){
      console.log("got an error: ", error);
    });
  })