const webworker2 = new Worker('comm.js');

function doSmth()
{
    webworker2.postMessage('go');
    console.log('Kommukation index -> worker')
}

webworker2.onmessage = function (workerMessage)
{
    console.log('[comm.js] - Message received > ' + workerMessage.data);
}