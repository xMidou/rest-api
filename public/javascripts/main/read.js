
db.collection("posts").get().then((data) => {
    data.forEach((doc) => {
        // console.log(doc.id);
        // console.log(`${JSON.stringify(doc.data())}`);
        $(".data").append( `<p>${JSON.stringify(doc.data())}</p>`);
        $(".data").append( `<button name="update" value="${doc.id}" class='update'>Update</button>`);
        $(".data").append( `<button name="update" value="${doc.id}" class='delete'>Delete</button>`);
    });
});
$(".data").on('click', '.update',function () {
    console.log($(this).val());
    let id = $(this).val();
    db.collection("posts").doc(id).update({
        firstName:'11111',
        capital: true
    });
});
$(".data").on('click', '.delete',function () {
    console.log($(this).val());
    let id = $(this).val();
    db.collection("posts").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
});  
