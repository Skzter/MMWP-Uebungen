const webworker = new Worker('selectionsort.js');
webworker.postMessage('Start');
webworker.onmessage = function (workerMessage)
{
    console.log("Sorted Array: " + workerMessage.data);
}