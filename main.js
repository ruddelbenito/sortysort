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
function merge(nums) {
    // base case: if array is size 0 or 1, it is already sorted
    if (nums.length === 0 || nums.length === 1) {
        return nums;
    }

    pieces = splitArray(nums);
    console.log(pieces);

}

function splitArray(nums) {
    let midpoint = nums.length / 2;
    console.log(`midpoint: ${midpoint}`);
    // left
    left = nums.slice(0, midpoint);
    // right
    right = nums.slice(midpoint, nums.length);

    return [left, right];
}

function combine(arrays) {
    result = [];

    return result;
}

function quickSort(array, high, low) {
    // base case: if given high <= low:
    //  - array is empty
    //  - array has been sorted through
    if (high <= low) {
        return;
    }

    let pivot = array[low];
    let spot = low;
    let pointer = low + 1;
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
];

// sortFunctions.forEach(sortFunction => {
//     console.log(`testing performance of ${sortFunction.name}`)
//     inputSizes.forEach(inputSize => {
//         benchmarkSort(sortFunction, inputSize, maxNumber);
//     });
// });