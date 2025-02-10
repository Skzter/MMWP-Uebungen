const webworker1 = new Worker('selectionsort.js');
webworker1.postMessage('Start');
webworker1.onmessage = function (workerMessage)
{
    console.log("Sorted Array: " + workerMessage.data);
}