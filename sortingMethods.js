class Sort {
  _swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }

  _merge(left, right, array, count = 0) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        array[outputIndex++] = left[leftIndex++];
      } else {
        array[outputIndex++] = right[rightIndex++];
      }
    }

    for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
    }
    console.log(`merge ${count}`)
    return array;
  }

  _partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
        this._swap(array, i, j);
        j++;
      }
    }
    this._swap(array, end - 1, j);
    return j;
  }

  quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
      return array;
    }
    const middle = this._partition(array, start, end);
    array = this.quickSort(array, start, middle);
    array = this.quickSort(array, middle + 1, end);
    return array;
  }

  mergeSort(array, count = 0) {
    if (array.length <= 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = this.mergeSort(left, count++);
    right = this.mergeSort(right, count++);
    console.log('Merging left:')
    console.log(left);
    console.log('with right:')
    console.log(right);
    return this._merge(left, right, array, count);
  }
}

module.exports = Sort;
