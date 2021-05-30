document.addEventListener("DOMContentLoaded", () => {
    function areSimilar(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
  
        let diff = [];// initialize array that'll be used to track indices where values differ
        
        for (let i = 0; i < arr1.length; i++) {// loop thru first array
          if (arr1[i] !== arr2[i]) { //check for value differences between arrays at each index
            diff.push(i); //if the values differ push index into diff array
            
            if (diff.length > 2) return false; 
            
            if (diff.length === 2) {
              // use the diff array indices to swap,  if swapped pairs are not eqaul return false; 
              if (arr1[diff[0]] !== arr2[diff[1]] || arr1[diff[1]] !== arr2[diff[0]]) {
                return false;
              }
            }
          }
        }
        //if it makes it through all of that 
        return diff.length === 0 || diff.length === 2;
    }
    console.log(areSimilar([1, 2, 3], [3, 2, 1]));
});

