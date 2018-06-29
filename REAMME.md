This is a solution to mask the digits with in the credit card string excluding the first character and the last 4 characters. So the masking happens only if the leght of the credit card string is greater that 6.

Test Case Inputs - 
1 - abcd-efgh-ijkl-mnop -> abcd-efgh-ijkl-mnop
2 - 123456 -> 1#3456
3 - 12345678901 -> 1######8901
4 - abcd123456787asjdnakj89as -> abcd#########asjdnakj89as
5 - 1234-SKIP-5678-9101 -> 1###-SKIP-####-9101
5 - 12345 -> 12345