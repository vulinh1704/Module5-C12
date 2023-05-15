try {
    let promise = new Promise((resolve, reject) => {
        resolve();
    })

    promise.then((arr) => {
        return 1;
    }).then((data) => {
        console.log(data)
    })
} catch (e) {
    console.log(e.message);
    res.json(e);
}

