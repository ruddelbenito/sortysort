function bubble() {
    let sorted = nums;
    let last = sorted.length - 1;

    while (last >= 0) {
        for (let index = 0; index < last; index++) {
            if (sorted[index] > sorted[index + 1]) {
                let temp = sorted[index];

                sorted[index] = sorted[index + 1];
                sorted[index + 1] = temp;
            }
        }

        last--;
    }

    return sorted;
}

function selection() {
    let sorted = nums;
    let current = 0;

    while (current < sorted.length) {
        let min = sorted[current];
        let minPosition = current;

        for (let index = current; index < sorted.length; index++) {
            if (sorted[index] < min) {
                min = sorted[index];
                minPosition = index;
            }
        }

        let temp = sorted[current];
        sorted[current] = min;
        sorted[minPosition] = temp;

        current++;
    }

    return sorted;
}

let nums = [];
let given = 100;

// let userInput = prompt('Enter a number of integers to sort: ');

for (let index = 0; index < given; index++) {
    nums.push(Math.round(Math.random() * 100));
}

console.log(nums);

let start = performance.now();

// console.log(bubble());
console.log(selection());

let duration = performance.now() - start;
console.log(`duration: ${duration} ms`);