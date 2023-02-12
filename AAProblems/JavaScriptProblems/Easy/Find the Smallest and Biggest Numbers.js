// my vertion
function minMax(arr) {
	min_num = arr[0];
    max_num = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min_num) min_num = arr[i];
        if (arr[i] > max_num) max_num = arr[i];
    }

    return [min_num, max_num];
}

// short vertion
function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }