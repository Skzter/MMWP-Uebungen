function selectionsort (arr)
{
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {

        // Assume the current position holds
        // the minimum element
        let min_idx = i;

        // Iterate through the unsorted portion
        // to find the actual minimum
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {

                // Update min_idx if a smaller element is found
                min_idx = j;
            }
        }

        // Move minimum element to its
        // correct position
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}

function getSortedArray(arr) {
    for (let val of arr) {
        sortArray += val + " ";
    }
    return sortArray;
}

self.onmessage = function (messageEvent)
{
    if(messageEvent.data == 'Start')
    {
        //unsortiertes array initialisiert
        var array = [50000];
        for(let i = 50000; i > 0; i--)
        {
            array.push(i);
        }
        selectionsort(array);
        let ausgabe = getSortedArray(array)
    }
    self.postMessage(ausgabe);
    self.close;
}