//declaring variables
const costFull= document.getElementById("cfs");
const sizeFull= document.getElementById("sfs");
const sizeMini= document.getElementById("smi");
const resultArea = document.getElementById("result");
const btnCalculate = document.getElementById("btnCalculate");

btnCalculate.onclick = function(){
  let costFullSize = parseFloat(costFull.value);
  let sizeMiniSize = parseFloat(sizeMini.value);
  let sizeFullSize = parseFloat(sizeFull.value);

  //logic / math
  let costMiniSize = parseFloat( (costFullSize / sizeFullSize) * sizeMiniSize).toFixed(2);
  
 let result = `$${costMiniSize}`;
    resultArea.innerHTML = result;
  }
  