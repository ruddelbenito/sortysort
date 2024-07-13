let testHeap = [2, 3, 4, 5, 3, 7, 9,];

function insert(heap, value) {
    console.log(heap);
    heap.push(value);

    if (heap.length === 1) {
        return;
    }

    currentNode = testHeap.length - 1;
    parentNode = Math.floor((currentNode - 1) / 2);

    while (heap[currentNode] < heap[parentNode]) {
        let temp = heap[currentNode];
        heap[currentNode] = heap[parentNode];
        heap[parentNode] = temp;

        currentNode = parentNode;
        parentNode = Math.floor((currentNode - 1) / 2);
    }

    console.log(heap);
}

insert(testHeap, 3);