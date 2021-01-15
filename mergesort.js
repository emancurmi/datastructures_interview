function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    //deivide arraylist
    const middle = Math.floor(array.length / 2);
    //set left array
    let left = array.slice(0, middle);
    //set right array
    let right = array.slice(middle, array.length);

    //regerge sort left
    left = mergeSort(left);
    //remerge sort right
    right = mergeSort(right);
    //merge
    return merge(left, right, array);
};

function merge(left, right, array) {

    let lIdx = 0; //left index
    let rIdx = 0; //right index
    let OIdx = 0; //output index


    while (lIdx < left.length && rIdx < right.length) {

        if (left[lIdx] < right[rIdx]) {
            array[OIdx++] = left[lIdx++];
        }
        else {
            array[OIdx++] = right[rIdx++];
        }
    }
    //add remaining values from left
    for (let i = lIdx; i < left.length; i++) {
        array[OIdx++] = left[i];
    }
    //add remaininig values from right
    for (let i = rIdx; i < right.length; i++) {
        array[OIdx++] = right[i];
    }

    //return sorted array
    return array;
};