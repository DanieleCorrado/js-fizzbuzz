// ciclo di controllo per i numeri divisibili per tre e/o cinque 

for (let i = 1; i<=100; i++) {
  if (((i % 3) === 0) && ((i % 5) === 0)) {

    console.log("FizBuzz");

  } else if((i % 3) === 0) {

    console.log("Fizz");

  } else if ((i % 5) === 0) {

    console.log("Buzz")

  } else {

    console.log(i);
    
  }
}