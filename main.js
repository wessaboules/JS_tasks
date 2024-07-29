

function convertion(){
  var money= document.getElementById('myinput').value;
  var currency= document.getElementById('select').value;
  var result= document.getElementById('result');
  if (isNaN(money)){
    result.innerHTML= "Please enter numbers only";
  }else if (money < 0){
    result.innerHTML= 'Please enter Positive Numbers only';
  }else if (money == 0){
    result.innerHTML= "Please enter numbers upper than  Zero";
  }else if(money > 0){
    if (currency=== "Currency"){
      result.innerHTML= "Please select the Currency";
    }else if (currency === "Dollar"){
      result.innerHTML= money* 50 + " Egyptian Pounds";
    }else if (currency === "Euro"){
      result.innerHTML = money * 65 + " Egyptian Pounds";
    }
  }
  return false;
}