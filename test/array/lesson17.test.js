import letterCombinations from '../../code/array/lesson17';

test('字母映射', () => {
    expect(letterCombinations('23')).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
})