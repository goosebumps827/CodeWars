function findUniq(arr) {
    // For every element in the arr, we reducing it to its basic characters
    const simpleArr = arr.map(
      x => x.toLowerCase()
        .split('')
        .filter((x, i, subArr) => subArr.indexOf(x) === i)
        .sort()
        .join('')
    )
    
    //find the unique one  
    const uniqueValue = simpleArr.filter((x, i) => i === simpleArr.indexOf(x) && i === simpleArr.lastIndexOf(x))
      .join('')
    
    // Its position in the simpleArr will correlate with the position of the unique string in the primary array
    const pos = simpleArr.findIndex(x => x === uniqueValue)
    
    return arr[pos]
  }