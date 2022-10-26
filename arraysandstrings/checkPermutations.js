//given two strings write a method to decide if one
//is a permutation of the other

/*
 * Inputs: string
 * Outputs: boolean
 * Constrains/complexities: no conditional
 * Example/edge cases: empty string
 *
 * Time complexity: it can be as high as o(n^2) or as low as O(nlogn) depending on the sorting algorithm like if we used merge sort.
 * Space complexity: o(1) just the size of strings
 */

//function that takes two strings, we put them into an array 
//and then we sort them to 
//if the strings arnt he same size we can immediately say no
// after they're sorted if the value at index i doesnt equal the value
//at the other index then we can return false

function permuation(str, str2) {
  if (str.length != str2.length) {
    return false;
  }


  let ch1 = str.split(' ');
  let ch2 = str2.split(' ');


  ch1.sort();
  ch2.sort();

  for(let i = 0; i < str.length; i++){
    if(ch1[i] != ch2[i]) {
        return false;
    }
    return true;
  }
};

/*
1. Iterate through s2 and keep expanding window until all characters in s1 occur in
the window.
2. If we encounter a point where all characters occur in the window, we check
if window's length is equal to s1.length. If so, we return true. Else, we advance `start` and reduce size of window.
3. As we reduce size of window, our window may no longer contain all characters of s1.
Then, we go back to step(1) and repeat the process. We do this until the end of array.
*/
var checkInclusion = function (s1, s2) {
	// If s1 is larger than s2 then match is not possible
	// i.e (s1 cannot be substring of s2)
	if (s1.length > s2.length) return false;
	let neededChar = {}; //To Store the frequency/count of required string s1
	for (let i = 0; i < s1.length; i++) {
		// Initially neededChar[s1[i]] will be undefined and
		// undefined || 0 will return 0. So we increment it by 1
		neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
	}
	/* 
	Now we have neededChar
	i.e neededChar={
		a:1,
		b:1
	}
	*/
	let left = 0, //left pointer/index of the sliding window
		right = 0, //right pointer/index of the sliding window
		requiredLength = s1.length; //length of the substring required in s2

	// Now iterate until the right index of window is lesser than length of s2
	while (right < s2.length) {
		// If we found s2 character in s1 i.e in neededChar then we decrease requiredLength
		if (neededChar[s2[right]] > 0) requiredLength--;
		// Since we have encountered new char i.e s2[right] we decrease it's 
		// count in neededChar even if it is not present in neededChar because we only care about neededChars
		neededChar[s2[right]]--;
		right++ //window is incremented by 1 step

		// Now if our requiredLength becomes 0 it means we have found a match of the s2 substring
		// So we return true
		if (requiredLength === 0) return true;

		// If our window length is equal to s1 length (length of string to search in s2)
		// then we have to remove left element of window i.e left++ and add new element from right 
		// will be added in next iteration
		if (right - left === s1.length) {
			// if the left element we are removing was a required character then we increase requiredLength
			// because that element will no longer be the part of sliding window
			if (neededChar[s2[left]] >= 0) requiredLength++;
			// We will also increase the count of left element removed from window
			neededChar[s2[left]]++;
			// And finally we will decrease the window size by 1 from left i.e left++
			left++
		}
	}
	// If match was not found we return false
	return false;
};

console.log(checkInclusion("yahi", "hiya")); //true
console.log(checkInclusion("hello", "hello")); //true
console.log(checkInclusion("hello", "hi")); // false
console.log(checkInclusion("dog", "yup")); // false
