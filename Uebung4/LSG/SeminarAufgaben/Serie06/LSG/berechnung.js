self.onmessage = function(messageEvent) {
    if (messageEvent.data == "Run") {
        let i, summe = 0;
        for (i = 0; i < 9000000; i++) {
            summe += i * i + Math.random();
        }
        self.postMessage(summe);
    }
};
