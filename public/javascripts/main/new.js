db.collection("posts").get().then((data) => {
    data.forEach((doc) => {
        // console.log(doc.id);
        // console.log(`${JSON.stringify(doc.data())}`);
        $(".site-section .row")
        .append( `  <div class="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="200">
                        <a href="single/${doc.id}"><img src="${doc.data().downloadURL}" alt="Image" class="img-fluid"></a>
                        <div class="p-4 bg-white">
                        <span class="d-block text-secondary small text-uppercase">${doc.data().name}</span>
                        <h2 class="h5 text-black mb-3"><a href="single">${doc.data().room}</a></h2>
                        </div>
                    </div>`
                );
        
    });
});