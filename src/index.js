module.exports = function towelSort(matrix) {

    if (matrix && matrix.length) {
        let sortedArray = [];
        for (let i = 0; i < matrix.length; i++) {
            let remainder = i % 2;
            if (remainder != 0) {
                matrix[i].reverse();
            }
        }

        for (let key in matrix) sortedArray = sortedArray.concat(matrix[key]);
        return sortedArray;

    } else {
        return [];
    }

}