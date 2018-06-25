const ccmask = require('./ccmasking');

console.log("1 - " + ccmask("abcd-efgh-ijkl-mnop"));
console.log("2 - " + ccmask("123456"));
console.log("3 - " + ccmask("12345678901"));
console.log("4 - " + ccmask("abcd123456787asjdnakj89as"));
console.log("5 - " + ccmask("1234-SKIP-5678-9101"));
