/*
给定一个数组，看是否满足如下要求：
1. 将其进行分组，且组内元素值一样
2. 每个分组内元素数量一样

2020年2月21日 16:55:34
思路：先将原始数组分割成[[1,1],[2,2]] 这样，然后来个循环看里面每个小数组长度是不是一样

https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
*/

export default (arr) => {
    // 将给定的数组按值进行划分
    let arr1 = arr.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
    }, {});
    let result = Object.entries(arr1).map(([key, value]) => new Array(value).fill(Number(key)));
    let firstItemLength = result[0].length;
    return result.every(item => item.length === firstItemLength);
}