// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    matrix &&
        matrix.forEach((elem, index) => {
            let arr = index % 2 === 0 ? elem : elem.reverse();

            arr.forEach((el) => {
                result = [...result, el];
            });
        });

    return result;
};
