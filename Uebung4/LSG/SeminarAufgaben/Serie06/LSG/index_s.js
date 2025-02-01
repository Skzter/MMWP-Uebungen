const webworker = new Worker('selectionsort.js');
webworker.postMessage('Start');
webworker.onmessage = function (workerMessage)
{
    alert("Sorted Array: " + workerMessage.data);
}