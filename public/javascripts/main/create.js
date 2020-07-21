$("form").submit(function(e){
    e.preventDefault();
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const rePassword = $('#rePassword').val();
    const phoneNumber = $('#phoneNumber').val();
    db.collection("posts").add({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    window.location.replace("/login");
    alert('good')
});
