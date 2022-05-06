//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59

//The maximum time never exceeds 359999 (99:59:59)

//You can find some examples in the test fixtures.




function humanReadable (seconds) {
    let hours = 0
    let minutes = 0
    let sec = 0
    
    for(let i=0;i<seconds;i++){ 
      sec+=1
      if(sec == 60){  
      sec = 0
      minutes +=1
      }if(minutes == 60){ 
      minutes = 0
      hours += 1
        
      }
     
    }
    
    hours = hours.toString()
    minutes = minutes.toString()
    sec = sec.toString()
    while (hours.length<2) hours = "0"+hours
    while (minutes.length<2) minutes = "0"+minutes
    while (sec.length<2) sec = "0"+sec
    return `${hours}:${minutes}:${sec}`;
  }