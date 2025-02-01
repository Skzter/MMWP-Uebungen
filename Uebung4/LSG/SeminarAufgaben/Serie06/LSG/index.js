const webworker = new Worker("berechnung.js");
webworker.postMessage("Run");
webworker.onmessage = function (workerMessage) {
    alert("Ergebnis: " + workerMessage.data);
};