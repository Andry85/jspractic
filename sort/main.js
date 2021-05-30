document.addEventListener("DOMContentLoaded", () => {

  

  function arrayChange(inputArray) {

    let lengthArr = inputArray.length;
    
    let sortedArr = [];
    let count = 0;
    

    function getMinimum () {
      let minVal= inputArray[0];
      let minValIndex;

      for (let i = 0; i < inputArray.length; i++) {
  
        if (inputArray[i] < minVal) {
            minVal = inputArray[i];
            minValIndex = i;
            
        } 
      }

      inputArray.splice(minValIndex, 1);
      
      count++;
      sortedArr.push(minVal);
      

      console.log('minVal', minVal)
      console.log('count', count)
      console.log('inputArray', inputArray)
      console.log('sortedArr', sortedArr)
    }

    for (let i = 0; i < lengthArr; i++) {
      getMinimum();
    }


    




    

   



  }   
  arrayChange([-1000, -2, 1, 8]);
});

