// sample1 = [
//   [1, 2],
//   [3, 4]
// ] 

// sample2 = [
//   [1, 1, 1,-1],
//   [1, 1,-1, 1],
//   [1,-1, 1, 1],
//   [-1,1, 1, 1]
// ] 

// sample3 = [
//   [1, 0, 4,-6],
//   [2, 5, 0, 3],
//   [-1,2, 3, 5],
//   [2, 1,-2, 3]
// ] 


const TOTAL_TIME = 10 * 1; 


let endTime = localStorage.getItem('saleEndTime');

if (!endTime) {
  endTime = Date.now() + TOTAL_TIME * 1000;
  localStorage.setItem('saleEndTime', endTime);
}

const timerElement = document.getElementById('countdown');

function updateTimer() {
  const now = Date.now();
  const timeLeft = Math.floor((endTime - now) / 1000); 

  if (timeLeft <= 0) {
  
    clearInterval(timerInterval);
    timerElement.textContent = "აქცია დასრულდა!";
    localStorage.removeItem('saleEndTime'); 
    return;
  }


  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');


  timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);