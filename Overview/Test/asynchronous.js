console.log('Linh bắt đầu học');

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Linh học xong')
        resolve();
    }, 5000);
})

promise.then(() => {
    console.log('Linh đi ngủ')
})

