class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const array = nums.sort((a,b)=>a-b);
        for(let i=0; i<array.length; i++){
            if(array[i] === array[i+1]) return true;
        }
        return false;
    }
}
