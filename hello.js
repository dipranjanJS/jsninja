var myArr = [1,2,0,3,0,5];
document.getElementById('para').textContent = myArr;

function moveZerosToEnd(nums) {
    count = 0;
    j = 0;
    flag = 0;
    while(j < nums.length) {
        if(nums[j] === 0 && flag === 0) {
            count = j;
            flag += 1;
        }
        if(nums[j] !== 0 && flag !== 0) {
            let a = nums[count];
            nums[count] = nums[j];
            nums[j] = a;
            count += 1
        }
        j += 1
    }
    document.getElementById('para').textContent = nums;
}