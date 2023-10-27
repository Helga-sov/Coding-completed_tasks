// TASK 1: palindrome function

function isPalindrome(str) {
	console.log(str === str.split("").reverse().join(""));
}

isPalindrome("racecar");
isPalindrome("tree");

// Task 2: write a function that takes as an argument an array ['Hello', ',', ' ', 'toDay', 'is', 'a', 'won derful', 'DAY'] and transforms it into 'Hello, Today Is A Wonderful Day'.

const sentence = ["Hello", ",", " ", "toDay", "is", "a", "won derful", "DAY"];

function transformArr(arr) {
	let sentenceArr = [];

	for (let i = 0; i < arr.length; i++) {
		const sentStr = arr[i].trim().toLowerCase().replaceAll(" ", "");
		const newStr =
			sentStr.slice(0, 1).toUpperCase() + sentStr.slice(1, arr[i].length);
		sentenceArr.push(newStr);
	}
	console.log(sentenceArr.join(" "));
}

transformArr(sentence);

// TASK 3:

const formInput = document.querySelectorAll(".formInput");

function handleSubmit(event) {
	event.preventDefault();

	formInput.forEach((input) => {
		if (input.value === "") {
			input.style.backgroundColor = "red";
		} else {
			input.style.backgroundColor = "green";
		}
	});
}
