$("form").submit(async function(e){
    e.preventDefault();
    const title = $('#title').val();
    const price = $('#price').val();
    const description = $('#description').val();
    const images = $('#img').prop('files');
    const metadata = {
        contentType: image.type,
    }
    let id = ''
    db.collection("posts").add({
        title,
        price,
        description,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        id = docRef.id;
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    for(let i = 0; i < images.length; i++) {
        let name = new Date() + '-' + title + '-' + i;
        let uploadTask = storageRef.child(name).put(images[i], metadata)
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
                        title,
                        price,
                        description,
                        downloadURL
                    });
                });
            });
    }
    alert('good')
});
