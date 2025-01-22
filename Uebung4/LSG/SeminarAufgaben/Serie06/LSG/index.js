let workerSource = document.querySelector("script#worker");
let workerBlob = new Blob([workerSource.text], { type: "application/javascript" });
let workerUrl = URL.createObjectURL(workerBlob);
let worker = new Worker(workerUrl);
URL.revokeObjectURL(workerUrl)
worker.addEventListener("message", function(messageEvent)
    {
        console.log("Der Wörker sagt: " + messageEvent.data);
        document.body.style.backgroundColor = "blue";
    });


