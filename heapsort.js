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

function remove(heap) {
    let last = heap.pop();
    heap[0] = last;
    let current = 0;
    let cont = true;

    while (cont) {
        console.log(`loop time baby`)
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

remove(testHeap);
console.log(testHeap);