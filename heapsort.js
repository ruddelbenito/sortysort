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
    let current = 0;
    let cont = false;
    let removed = heap[0];

    if (heap.length !== 0) {
        heap[0] = last;
        cont = true;
    }




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

    return removed;
}

function heapify(heap) {
    let newArray = [];
    for (let index = 0; index < heap.length; index++) {
        insert(newArray, heap[index]);
    }

    return newArray;
}

function heapsort(array) {
    let heapified = heapify(array);
    let sorted = [];

    while (heapified.length > 0) {
        let value = remove(heapified);
        sorted.push(value);
    }

    return sorted;
}

let test = [5, 13, 2, 21, 193];

console.log(heapsort(test));