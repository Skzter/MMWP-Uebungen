self.onmessage = function(messageEvent)
{
    if(messageEvent.data == 'go')
    {
        console.log('[comm.js] - Kommunikation Worker -> Index')
    }
    self.postMessage('hallo von Worker');
    self.close;
}