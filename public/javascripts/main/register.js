$("form").submit(function(e){
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val();
    const rePassword = $('#rePassword').val();
    if (email.length < 4) {
        alert('Please enter an email address.');
    }
    if (password.length < 4) {
        alert('Please enter a password.');
    }
    if (password != rePassword) {
        alert('Please enter password again');
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
        // ...
        
    });
    alert('good')
});