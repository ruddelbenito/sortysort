let testHeap = [8, 11, 10, 15, 12, 5, 6, 7, 8, 5, 3, 1];

function insert(heap, value) {
    heap.push(value);

    if (heap.length === 1) {
        return;
    }

    currentNode = heap.length - 1;
    parentNode = Math.floor((currentNode - 1) / 2);

    while (heap[currentNode] < heap[parentNode]) {
        let temp = heap[currentNode];
        heap[currentNode] = heap[parentNode];
        heap[parentNode] = temp;

        currentNode = parentNode;
        parentNode = Math.floor((currentNode - 1) / 2);
    }
}

function remove(heap) {
    let last = heap.pop();
    heap[0] = last;
    let current = 0;
    let cont = true;

    while (cont) {
        let leftChild = current * 2 + 1;
        let rightChild = current * 2 + 2;

        if (Math.min(heap[leftChild], heap[rightChild]) < heap[current]) {
            let swap;

            if (heap[leftChild] < heap[rightChild]) {
                swap = leftChild;
            }
            else {
                swap = rightChild;
            }

            let temp = heap[current];
            heap[current] = heap[swap];
            heap[swap] = temp;
            current = swap;
        }
        else {
            cont = false;
        }
    }
}

function heapify(heap) {
    let newArray = [];
    for (let index = 0; index < heap.length; index++) {
        insert(newArray, heap[index]);
    }

    console.log(newArray);
}

heapify(testHeap);