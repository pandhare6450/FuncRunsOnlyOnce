
function once(func,context){
  let ran;
  return function (){
    if(func){
      ran = func.apply(context || this,arguments)
      func = null
    }
    return ran;
  }
}

const logMe = once((i) => console.log('times',i))

logMe('twenty')
logMe()
logMe()
logMe()