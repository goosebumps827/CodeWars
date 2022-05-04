var toUnderscore;

toUnderscore = function(string) {
  return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
};