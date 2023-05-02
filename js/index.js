// ciclo di controllo per i numeri divisibili per tre e/o cinque 

  for (let i = 1; i<=100; i++) {

    const node = document.createElement("div");

    if (((i % 3) === 0) && ((i % 5) === 0)) {

       // Create a text node:
      let textnode = document.createTextNode("FizzBuzz");
      node.appendChild(textnode);
      document.getElementById("container").appendChild(node).classList.add('counter', 'three-five-multy');
  
    } else if((i % 3) === 0) {
  
      let textnode = document.createTextNode("Fizz");
      node.appendChild(textnode);
      document.getElementById("container").appendChild(node).classList.add('counter', 'three-multy');
  
    } else if ((i % 5) === 0) {
  
      let textnode = document.createTextNode("Buzz");
      node.appendChild(textnode);
      document.getElementById("container").appendChild(node).classList.add('counter', 'five-multy');
  
    } else {
  
      let textnode = document.createTextNode(i);
      node.appendChild(textnode);
      document.getElementById("container").appendChild(node).classList.add('counter', 'other-number');
    }

  }
