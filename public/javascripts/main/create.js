$("form").submit(function(e){
    e.preventDefault();
    const title = $('#title').val();
    const price = $('#price').val();
    const description = $('#description').val();
    const images = $('#img').prop('files');
    const metadata = {
        contentType: image.type,
    }
    let url = []
    for(let i = 0; i < images.length; i++) {
        const name = new Date() + '-' + title + '-' + i;
        storageRef.child(name).put(images[i], metadata)
        url.push(name)
    }
    console.log(url)
    
    db.collection("posts").add({
        title,
        price,
        description,
        url,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
    alert('good')
});
