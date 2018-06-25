module.exports = function (cc) {
  let result = "";
  let hashtable;
  let marker = -1;
  let count = 0;
  if(cc.length < 6) return cc;
  for(let i = 0; i < cc.length; i++) {
    if(cc[i] >= '0' && cc[i] <= '9') {
      //console.log(cc[i]);
      if(marker < 0) marker = i;
      count++;
    }
  }

  if(marker >= 0 && count >= 6) {
    // console.log(marker + " " + count);
    for(let i = 0; i < cc.length; i++) {
      //console.log(cc[i] >= '0' && cc[i] <= '9' && i > 0 && i < (cc.length - 4));
      (cc[i] >= '0' && cc[i] <= '9' && i > 0 && i < (cc.length - 4)) ? (result += '#') : (result += cc[i]);
    }
  }
  else result = cc;
  return result;
}