/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1;
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, temporaryLongest = 0) {
  if (idx === words.length) return temporaryLongest;
  temporaryLongest = Math.max(words[idx].length, temporaryLongest);
  return longest(words, idx + 1, temporaryLongest)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, everyOtherLetterString = "") {
  if (idx >= str.length) return everyOtherLetterString;
  everyOtherLetterString += str[idx];
  return everyOther(str, idx + 2, everyOtherLetterString)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length <= 1) {
    return true;
  }
  if(str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1))
  }
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(!str.length) return str;
  let chr = str.charAt(0);
  return revString(str.slice(1)) + chr
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strArr = [];
  for(key of Object.keys(obj)){
    const value = obj[key];
    if(typeof value === "string"){
      strArr.push(value)
    }
    if(typeof value === "object"){
      strArr = strArr.concat(gatherStrings(value))
    }
  }
  return strArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  if(!arr.length) return -1
  const midpoint = Math.floor(arr.length - 1 / 2);
  console.log(midpoint, arr[midpoint])
  if(arr[midpoint] === val) return midpoint
  if(arr[midpoint] > val){
    return binarySearch(arr.slice(0, midpoint), val);
  }
  return binarySearch(arr.slice(midpoint + 1), val);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
