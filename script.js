function isSameType(value1, value2) {
  let val1 = typeof value1;
	let val2 = typeof value2;
	if(val1==val2) return true;
	else false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
