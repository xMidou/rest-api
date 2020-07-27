console.log(1);
$("form").submit(async function(e){
    e.preventDefault();
    const name = $('#name').val();
    const room = $('#room').val();
    const price = $('#price').val();
    const inputAddress2 = $('#inputAddress2').val();
    const city = $('#city').val();
    const zip = $('#zip').val();
    const description = $('#description').val();
    const images = $('#img').prop('files');
    const metadata = {
        contentType: images.type,
    }
    let id = ''
    db.collection("posts").add({
        name,
        room,
        price,
        inputAddress2,
        city,
        zip,
        description,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        id = docRef.id;
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    let uploadTask = storageRef.child(name+room+price).put(images[0], metadata)
    uploadTask.on('state_changed', function(snapshot){
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
        }, function(error) {
            Console.log(error);
        }, function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                let url = downloadURL;
                db.collection("posts").doc(id).update({
                    name,
                    room,
                    price,
                    inputAddress2,
                    city,
                    zip,
                    description,
                    downloadURL
                });
            });
        });
    alert('good')
});
