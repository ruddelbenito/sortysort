function bubble(nums) {
    let last = nums.length - 1;


    while (last >= 0) {
        for (let index = 0; index < last; index++) {
            if (nums[index] > nums[index + 1]) {
                let temp = nums[index];

                nums[index] = nums[index + 1];
                nums[index + 1] = temp;
            }
        }

        last--;
    }

    return nums;
}


function selection(nums) {
    let current = 0;

    while (current < nums.length) {
        let min = nums[current];
        let minPosition = current;



        for (let index = current; index < nums.length; index++) {
            if (nums[index] < min) {
                min = nums[index];
                minPosition = index;
            }
        }

        let temp = nums[current];
        nums[current] = min;
        nums[minPosition] = temp;

        current++;
    }

    return nums;
}

// merge sort
function mergeSort(nums) {
    // base case: if array is size 0 or 1, it is already sorted
    if (nums.length === 0 || nums.length === 1) {
        return nums;
    }

    let pieces = splitArray(nums);

    let left = mergeSort(pieces[0]);
    let right = mergeSort(pieces[1]);

    return merge([left, right]);
}

function splitArray(nums) {
    let midpoint = nums.length / 2;

    // left
    left = nums.slice(0, midpoint);
    // right
    right = nums.slice(midpoint, nums.length);

    return [left, right];
}

function merge(arrays) {
    let leftArray = arrays[0];
    let rightArray = arrays[1];

    // if one of the two arrays are empty, return the other array
    if (leftArray.length === 0) {
        return rightArray;
    }
    if (rightArray.length === 0) {
        return leftArray;
    }

    let result = [];

    while (leftArray.length !== 0 && rightArray.length !== 0) {
        if (leftArray[0] < rightArray[0]) {
            result.push(leftArray.shift());
        }
        else {
            result.push(rightArray.shift());
        }
    }

    // if after one array is empty, the other array still has content, dump the rest of
    // the non-empty array into result
    if (leftArray.length > 0) {
        result = [...result, ...leftArray]
    }

    if (rightArray.length > 0) {
        result = [...result, ...rightArray];
    }

    return result;
}

function quickSort(array, low, high) {
    // base cases
    // if only 1 item, it is already sorted
    if (high - low == 1) {
        return;
    }
    // if two items, if they are already sorted, return
    if (high - low == 2 && array[low] < array[high]) {
        return;
    }

    // after first iteration, if high is less than or equal to low,
    // sorting has been completed
    if (high <= low) {
        return;
    }

    let pivot = array[low];
    let spot = low;
    let pointer = low + 1;

    while (pointer < high) {
        if (array[pointer] < pivot) {
            spot++;

            let temp = array[pointer];
            array[pointer] = array[spot];
            array[spot] = temp;
        }

        pointer++;
    }

    let temp = array[low];
    array[low] = array[spot];
    array[spot] = temp;

    // recursion
    quickSort(array, low, spot + 1);
    quickSort(array, spot + 1, high);
}

function benchmarkSort(sortFunction, inputSize = 10, maxNumber = 100) {
    let nums = [];
    for (let index = 0; index < inputSize; index++) {
        nums.push(Math.round(Math.random() * maxNumber));
    }
    let start = performance.now();

    let sortedArray = sortFunction(nums);
    let duration = performance.now() - start;
    console.log(`for input size: ${nums.length} algorithm duration: ${duration} ms`);
}


const inputSizes = [
    10,
    100,
    150,
    1000,
    1500,
    10000,
    15000,
];


const maxNumber = 500000;

const sortFunctions = [
    bubble,
    selection,
    mergeSort,
];

// sortFunctions.forEach(sortFunction => {
//     console.log(`testing performance of ${sortFunction.name}`)
//     inputSizes.forEach(inputSize => {
//         benchmarkSort(sortFunction, inputSize, maxNumber);
//     });
// });

let test = [4, 2, 8, 9, 3];
quickSort(test, 0, test.length);
console.log(test);