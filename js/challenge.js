
    
   
    let count = 0;
    let timer = setInterval(incrementCounter, 1000);
    let isPaused = false;
    let likes = 0;
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    const heartButton = document.getElementById('heart');
    
    
    
    function incrementCounter() {
      count++;
      counter.innerText = count;
      likes = 0; 
    }

    function decrementCounter() {
        if (count > 0) {
          count--;
          counter.innerText = count;
          likes = 0; 
        }
      }

      function likeCurrentCount() {
        if (!isPaused){
        likes++;
        heartButton.innerText = `(${likes})`;
      }
    }

   
      minus.addEventListener('click', decrementCounter);
      plus.addEventListener('click', incrementCounter);
      heartButton.addEventListener('click', likeCurrentCount);
      












    