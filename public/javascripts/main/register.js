$("form").submit(function(e){
    e.preventDefault();
    
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const email = $('#email').val();
    const password = md5($('#password').val());
    const rePassword = $('#rePassword').val();
    const phoneNumber = $('#phoneNumber').val();
    if (email.length < 4) {
        alert('Please enter an email address.');
    }
    if ($('#password').val().length < 4) {
        alert('Please enter a password.');
    }
    if ($('#password').val() != rePassword) {
        alert('Please enter password again');
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async () => {
        console.log('111111111111111')
        await db.collection("user").add({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: md5(password),
            phoneNumber: phoneNumber,
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        await window.location.replace("/login");
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
    });
});
