var missingNumber = function(nums) {
    let n = nums.length;
    
    var largestNum = 0;
    var currentSum = 0; 
    for(let i = 0; i < n ; i++){

        currentSum = currentSum + nums[i];
        
        if(largestNum < nums[i]){
            largestNum = nums[i];
        } 
    }

    var realSum = 0; 
    for(let k = 0 ; k <= largestNum ; k++){
        realSum = realSum+k;
    }

    return realSum - currentSum;

};

console.log(missingNumber([3,0,1]));
//  [9,6,4,2,3,5,7,0,1]