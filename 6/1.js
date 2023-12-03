function findMinMax(array) {
    if (array.length === 0) {
        return null;
    }

    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }

        if (array[i] > max) {
            max = array[i];
        }
    }

    return { min, max };
}


const result1 = findMinMax([1, 7, 5, 6, 0]);
console.log(result1);  //  { min: 0, max: 7 }

const result2 = findMinMax([3, 1, -9, -3, 2, 8]);
console.log(result2);  //  { min: -9, max: 8 }
