function checkAuth(){
    firebase.auth().onAuthStateChanged(function (user) {
        console.log(user);
        if (user) {
            //alert("Signed In");
            alert($("#board").text())
            
        } else {
            //alert("Not Signed In");
        }
    });
}

function redirectToDashboard(){
    window.location.href="dashboard.html";
}

$("#logout").click(function(e){
    e.preventDefault();
    firebase.auth().signOut().then(function(){
        alert("Logged Out");
    });
});
