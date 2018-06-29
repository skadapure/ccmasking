const ccmask = require('./ccmasking');

console.log("1 - " + "abcd-efgh-ijkl-mnop"  + " -> " + ccmask("abcd-efgh-ijkl-mnop"));
console.log("2 - " + "123456"  + " -> " + ccmask("123456"));
console.log("3 - " + "12345678901"  + " -> " + ccmask("12345678901"));
console.log("4 - " + "abcd123456787asjdnakj89as"  + " -> " + ccmask("abcd123456787asjdnakj89as"));
console.log("5 - " + "1234-SKIP-5678-9101"  + " -> " + ccmask("1234-SKIP-5678-9101"));
console.log("5 - " + "12345"  + " -> " + ccmask("12345"));
