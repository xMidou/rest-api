$("form").submit(function(e){
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.replace("/");
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
    })
});
console.log('good')