
  
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCi3WysLzE0cZfJkTWlRyDzL3aCU7HNZVQ",
      authDomain: "proj-d33ad.firebaseapp.com",
      databaseURL: "https://proj-d33ad.firebaseio.com",
      projectId: "proj-d33ad",
      storageBucket: "proj-d33ad.appspot.com",
      messagingSenderId: "78745486811"
      };
      firebase.initializeApp(config);



  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      document.getElementById("login_div").style.display.pathname = "MainPageCouple.html";
      window.location.pathname = 'MainPageCouple.html';
  
  
    } else {
      // No user is signed in.
  
      
      document.getElementById("login_div").style.display = "block";
      
  
    }
  });
  
  function Login(){
  
    var userEmail = document.getElementById("l_email_field").value;
    var userPass = document.getElementById("l_password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  }
  
  
  function LogOut(){
    
    firebase.auth().signOut();
    window.alert("התנתקת מהמערכת - TEST");
    window.location.pathname = 'Login.html'
  
    
  }
    
  
  //------- sign up and register to firbaseDB ----------//
  
  function SignUp(){
  
  
      var userEmail = document.getElementById("email_field").value;
      var userPass = document.getElementById("password_field").value;  
    
    
      
      firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    
    
          window.alert(userEmail + "הנתונים נשמרו");
          window.location.pathname = "Login.html";
          
    
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
  
          window.alert("Error : " + errorMessage);
          // ...
        });
    
    
    }
  
  
    
  //------- buttun - go to register page(MainPage page --> Register page) ----//
  
    function Register_page(){
  
      window.location.pathname = 'Register.html'
  
    }
  
  //------- buttun - go to login page(MainPage page --> Login page) ----//
  
    function login_page(){
  
      window.location.pathname = 'Login.html'
  
    }
  
  
 //------- buttun - go to homePage(MainPage page --> homePagw page) ----//

  function HomPageCouple(){
    
    window.location.pathname = 'MainPageCouple.html'


  }









  //------- buttun - go to MainPageCouple page after store in firebase(form page --> MainPageCouple page) -----------------//
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  function StoreData(){
  
    var firebaseRef = firebase.database().ref('Users');
  
    var g_name = document.getElementById("broom_name").value;
    var b_name = document.getElementById("bride_name").value;
    var w_place = document.getElementById("Wedding_place").value;
    var w_date = document.getElementById("Wedding_date").value;
  
  
    firebaseRef.child("Users_info").push({
      groom_name : g_name,
      bride_name : b_name,
      Wedding_place : w_place, 
      wedding_reception : w_date
     
    });
  
    // window.location.pathname = 'ToDoList.html'
       window.alert("הנתונים נשמרו");
       window.location.pathname = 'MainPageCouple.html';
    }
    

    
  
    //------- buttun - go to ToDoList page(MainCuplePage page --> ToDoList page) ----//
    
    function ToDoList(){
  
      window.location.pathname = 'ToDoList.html'
  
    }
  
  
  
  
  
  //------- buttun - go to GuestList page(MainPageCouple page --> GuestList Page) ----//
  
  
    function GuestList(){
  
      window.location.pathname = 'GuestList.html'
  
    }  
  
  
    //------- buttun - popup page - Add guest ----//
  
  
  function Add_Guest(){
  
  // Get the modal
  var modal = document.getElementById('myModal');
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
  
  }
  
  
  
  
  // --------------  add Guest Diteal to firbase db --------- //
  function AddGuest(){
  
    var firebaseRef = firebase.database().ref('Guests');
  
    var nameText = document.getElementById("name").value;
    var phoneText = document.getElementById("phone").value;
    var categoryText = document.getElementById("category").value;
    var statusText = document.getElementById("status").value;
  
  
    firebaseRef.child("Guests_info").push({
      geust_name : nameText,
      guest_phone : phoneText,
      geust_category : categoryText, 
      geust_status : statusText
     
    });
    
    }
  

  //----------- end add guest -------------//




  // function RemoveGuest(){

  //   window.alert("nmbjhk");
  //   var key = document.getElementById(content).row.childData;

  //   firebase.database().ref().child('Guests/Guests_info/' + key + '/').remove();
  //   alert('row was removed');
  //   reload_page();
  //   }









  
  //------------------------------------ add guest to table (GuestList page) -----------------//
  
    $(document).ready(function(){
          $(".add-row").click(function(){
              var name = $("#name").val();
              var phone = $("#phone").val();
              var category = $("#category").val();
              var status = $("#status").val();
              var markup = "<tr><td>" + status + "</td><td>"+ category + "</td><td>" + phone + "</td><td>" + name + "</td><td><input type='checkbox' name='record'></td></tr>";
              $("table tbody").append(markup);
          });
          
          // Find and remove selected table rows
          $(".delete-row").click(function(){
              $("table tbody").find('input[name="record"]').each(function(){
                if($(this).is(":checked")){
                      $(this).parents("tr").remove();
                  }
              });
          });
      });      
  
  //------ end add guest to table (GuestList page) ------//

  //----------------------------- GuestList page - show data from firebase to tabl ---------------//


  var database = firebase.database();
  database.ref("Guests/Guests_info").once('value', function(snapshot){
      if(snapshot.exists()){
          var content = '';
          snapshot.forEach(function(data){
              var val = data.val();
              content +='<tr>';
              content += '<td>' + val.geust_category + '</td>';
              content += '<td>' + val.geust_status + '</td>';
              content += '<td>' + val.guest_phone + '</td>';
              content += '<td>' + val.geust_status + '</td>';
              content += "</td><td><input type='checkbox' name='record'></td></tr>";
    
          });
          $('#table').append(content);
      }
  });



  //--------- end - show data from firebase to tabl ---------------//
  

var click = document.getElementById("clicks");

var ClickRef = firebase.database().ref("users").child("bride_name");

ClickRef.on('value' , function(snapshot){

  

})

  function take(){

    var playersRef = firebase.database().ref("Guests/Guests_info");

    playersRef.on("child_added", function(data, prevChildKey) {
       var newPlayer = data.val();
       console.log("bride name: " + newPlayer.bride_name);
       console.log("groom name: " + newPlayer.groom_name);
       console.log(prevChildKey);

       
       
       document.getElementById("clicks").innerHTML = newPlayer.geust_name;
       document.getElementById("GroomName").innerHTML = newPlayer.bride_name;       
      //  window.location.pathname = 'invited.html';
    });

  }



 





// function invitwer_Submit(){


//   var firebaseRef = firebase.database().ref('Guests_rsvp');
  
//   var GuestName = document.getElementById("name").value;
//   var Guest = document.getElementById("phone").value;
//   var categoryText = document.getElementById("category").value;
//   var statusText = document.getElementById("status").value;


//   firebaseRef.child("Guests_info").push({
//     geust_name : nameText,
//     guest_phone : phoneText,
//     geust_category : categoryText, 
//     geust_status : statusText
   
//   });
  
//   }



  
  
  //---------- To-Do-List page ------------------------//
  
  
  
  
  
  
  
  //----------end  To-Do-List page ------------------------//
  
  
  




  // var userDataRef = firebase.database().ref("users/Users_info").orderByKey();
  // userDataRef.once("value").then(function(snapshot) {
  // snapshot.forEach(function(childSnapshot) {
   
  //   var name_val = childSnapshot.val().brideName;
  //   var id_val = childSnapshot.val().groom_name;
  
  //   $("clicks").append(name_val);
  //   $("#id").append(id_val);
  
  //   });
  // });







  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });