db.collection("user").get().then((data) => {
    data.forEach((doc) => {
        // console.log(doc.id);
        console.log(`${JSON.stringify(doc.data())}`);
        $("tbody").append(`
            <tr class = '${doc.id}'>
                <td class="py-1">
                <img src="/images/faces-clipart/pic-1.png" alt="image" /> </td>
                <td> ${doc.data().firstName + " " + doc.data().lastName} </td>
                <td> ${doc.data().email}</td>
                <td> Modern House </td>
                <td> <p>I want to rent a high-class apartment and need to refer to your gender price.</p>  </td>
                <td><button id ='delete' type="button" value="${doc.id}" class="btn btn-outline-primary">Delete</button></td>
            </tr>
        `);
    });
});
$("tbody").on('click', '#delete',function () {
    console.log($(this).val());
    let id = $(this).val();
    db.collection("user").doc(id).delete().then(function() {
        $(`.${id}`).remove();
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
}); 