module.exports = function(str) {
  return str.replace(str.substring(1, str.length-4), str.substring(1, str.length-4).replace(/([0-9])/g, '#'));
}