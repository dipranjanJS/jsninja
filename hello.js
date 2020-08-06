let myArr = [1,2,0,3,0,5];

document.getElementById('para').textContent = myArr;

function moveZerosToEnd(arr) {
    for(i = 0 ; i < arr.length ; i++) {
        if(arr[i] === 0) {
            arr.splice(i,1);
            arr.push(0);
            console.log(arr);
        }
    }

    document.getElementById('para').textContent = arr;
}