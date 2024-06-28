let str = prompt("Enter the string ");
let result = palindrome(str, 0);
if (result) console.log("Is palindrome");
else console.log(`Is not palindrome`);

let palindrome = (str, occ) => {
  if (occ == 0 && str.trim().length == 0) {
    return false;
  }

  str = str.trim();
  let len = str.length;

  if (str[0] !== str[len - 1]) return false;
  else if (len == 0 || len == 1) return true;
  else return palindrome(str.slice(1, -1), 1);
};
