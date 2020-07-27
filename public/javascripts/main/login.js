$("form").submit(function(e){
    e.preventDefault();
    const email = $('#email').val();
    const password = md5($('#password').val());
    let firstName;
    let lastName;
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async () => {
      await db.collection("user").where('email', '==', email).get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            firstName = doc.data().firstName;
            lastName = doc.data().lastName;
        });
      })
      await $.ajax({
        type: "POST",
        url: link + 'login',
        data: {
          email,
          password,
          firstName,
          lastName
        },
      });
      console.log('123123')
      window.location.replace(link);
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
let a = window.location.href.split('/');
let link = a[a.length - 2] != 'admin' ? '/' : '/admin/';
console.log(link);

