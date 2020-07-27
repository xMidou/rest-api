db.collection("posts").get().then((data) => {
    data.forEach((doc) => {
        // console.log(doc.id);
        console.log(`${JSON.stringify(doc.data())}`);
        $("#product").append(`
                    <tr id = '${doc.id}' >
                        <td class="width_td">${doc.data().name}</td>
                        <td class="width_td">
                          <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                        <td class="width_td"> ${doc.data().inputAddress2} </td>
                        <td class="width_td"> Modern House </td>
                        <td class="width_td">$100,0/Nights</td>
                        <td><button type="button" class="btn btn-outline-primary " id = 'delete' value = '${doc.id}'>Delete</button></td>
                    </tr>
        `);
    });
});
$("#product").on('click', '#delete',function () {
    console.log($(this).val());
    let id = $(this).val();
    console.log(id);
    db.collection("posts").doc(id).delete().then(function() {
        $(`#${id}`).remove();
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}); 