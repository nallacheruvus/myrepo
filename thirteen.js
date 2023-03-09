function finishWork(work, callback) {
    console.log(`Starting My Work On the ${work}`);
    callback(work);
}
function alertComplete(work) {
    console.log(`Done Completing ${work}`);
}
finishWork('Data Upload', alertComplete);