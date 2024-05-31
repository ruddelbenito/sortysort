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

    let left = merge(pieces[0]);
    let right = merge(pieces[1]);

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
    // if one of the two arrays are empty, return the other array
    if (arrays[0].length === 0) {
        return arrays[1];
    }
    if (arrays[1].length === 0) {
        return arrays[0];
    }

    let result = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < arrays[0].length && rightPointer < arrays[1].length) {
        if (arrays[0][leftPointer] < arrays[1][rightPointer]) {
            result.push(arrays[0][leftPointer])
            leftPointer++;
        }
        else {
            result.push(arrays[1][rightPointer]);
            rightPointer++;
        }
    }

    // if after one array is empty, the other array still has content, dump the rest of
    // the non-empty array into result
    if (leftPointer < arrays[0].length) {
        result = result.concat(arrays[0].slice(leftPointer, arrays[0].length));
    }

    if (rightPointer < arrays[1].length) {
        result = result.concat(arrays[1].slice(rightPointer, arrays[1].length));
    }

    return result;
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
    merge,
];

sortFunctions.forEach(sortFunction => {
    console.log(`testing performance of ${sortFunction.name}`)
    inputSizes.forEach(inputSize => {
        benchmarkSort(sortFunction, inputSize, maxNumber);
    });
});
