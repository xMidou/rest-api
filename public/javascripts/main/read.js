db.collection("user").get().then((datas) => {
    datas.forEach((doc) => {
        console.log(doc.id);
       console.log(`${JSON.stringify(doc.data())}`);
    });
 });