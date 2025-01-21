const workerScript = "console.log('test')"; 
const blob = new Blob([workerScript], { type: 'application/javascript' });
const workerUrl = URL.createObjectURL(blob);
const worker = new Worker(workerUrl);
