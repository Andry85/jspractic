document.addEventListener("DOMContentLoaded", () => {


 
  var i = 0,
    j = 8;

checkiandj: while (i < 4) {
   console.log("i: " + i);
   i += 1;

   checkj: while (j > 4) {
      console.log("j: "+ j);
      j -= 1;
      if ((j % 2) == 0)
         continue checkj;
      console.log(j + " является нечётным.");
   }
   console.log("i = " + i);
   console.log("j = " + j);
}

 
});

