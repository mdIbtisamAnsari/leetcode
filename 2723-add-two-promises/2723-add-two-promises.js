
var addTwoPromises = async function(promise1, promise2) {
    let a = 0
    await promise1.then(val=> a+=val);
    await promise2.then(val=> a+=val);
    return a
};
