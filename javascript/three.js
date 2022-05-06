//Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    return  string.split('').map(x=> x == x.toLowerCase() ? x : x = ' '+ x).join('')
    }