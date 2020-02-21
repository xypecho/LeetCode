/*
给定一个数组，看是否满足如下要求：
1. 将其进行分组，且组内元素值一样
2. 每个分组内元素数量一样

https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
*/

export default (arr) => {
    const len = arr.length; // 给定数组的长度
    if (len >= 2) {
        let dst = []; // 存储分组的数组
        let min = Number.MAX_SAFE_INTEGER; // 分组的最小长度
        arr.sort((a, b) => a - b); // sort() 会修改原数组
        for (let i = 0, temp = []; i < len; i++) {
            // j 是从i的后面一个开始遍历
            temp.push(arr[i]); // 先把第一个放进去，然后遍历对比第二项
            for (let j = i + 1; j < len - 1; j++) {
                if (arr[i] === arr[j]) {
                    temp.push(arr[j])
                } else {
                    if (temp.length < min) {
                        min = temp.length;
                    }
                    dst.push([].concat(temp)) // 开辟新的内存空间，此处相当于深拷贝temp对象，如果不深拷贝，下一次循环时会修改temp中内容，之前push的也会跟着变
                    temp.length = 0; // 清空数组
                    i = j; // 跳过当前循环
                    break;
                }
            }
        }
        console.log(dst)
    } else {
        return false;
    }
}