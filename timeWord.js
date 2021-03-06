const timeStorege = {
    0: "oh",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen", 
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  }
  
  let timeStoregeOverTeen = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty"
  }
  
  function timeWord(str){
    str = str.split(':')
    let hour = manageHour(str[0], str[1])
    let min = manageMinutes(str[1])
    return hour + " " + min
  }
  
  function manageHour(hour, min){
    hour = Number(hour)
    min = Number(min)
    // console.log(hour)
    if(hour === 12 && min ===0) return "Noon"
    if(hour === 0 && min ===0) return"Midnight"
    
    if(hour === 0 || hour === 12) return "twelve"
    if(hour < 12){
      if(min === 0){
        return timeStorege[hour] + " " + 'o\'clock'
      }
      return timeStorege[hour]
    }else if(hour > 12){
      if(min === 0){
        return timeStorege[hour - 12] + " " + 'o\'clock'
      }
      return timeStorege[hour - 12]
    }
  }
  
  function manageMinutes(min){
    
    if(Number(min) === 0) return ''
    if(Number(min[0]) === 0){
      return timeStorege[min[0]] + " " + timeStorege[min[1]]
    }else if (min[0] > 1){
    if(Number(min[1]) === 0){
        return timeStoregeOverTeen[min[0]]
    }
      return timeStoregeOverTeen[min[0]] + " " + timeStorege[min[1]]
    }else{
      return timeStorege[min]
    }
  }

module.exports = timeWord;