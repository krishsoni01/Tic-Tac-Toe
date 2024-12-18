let turn = "X";
let turnBox = document.querySelectorAll(".turnBox");
let boxes = document.querySelectorAll(".box");
let isGameOver = false;

turnBox[0].style.backgroundColor = "#091E05";

boxes.forEach((e) => {

  e.addEventListener("click", function()
  {
  if ( isGameOver || e.innerHTML === "X" || e.innerHTML === "O") {
    return;
            }

  e.innerHTML = turn;
 
  if (checkWin()) {
   
  document.querySelector(".result").innerText = "Player " + turn + " wins!";
  document.querySelector(".playAgainBtn").style.display = "block";
  isGameOver = true;
  disableAllBoxes();
  return;
  }
 
  if (checkDraw())
  {
    document.querySelector(".result").innerText = "It's a draw!";
    document.querySelector(".playAgainBtn").style.display = "block";
    isGameOver = true;
    disableAllBoxes();
    return;
        }
 
  turnChange();
            });
        });

function turnChange() {

if (turn === "X")
{
    turn = "O";
    turnBox[1].style.backgroundColor = "#091E05";
    turnBox[0].style.backgroundColor = "";
            }
else
{
    turn = "X";
    turnBox[0].style.backgroundColor = "#091E05";
    turnBox[1].style.backgroundColor = "";
            }
        }

function disableAllBoxes() {
    boxes.forEach(box => {
        box.classList.add("disabled");
    });
}


const winConditions = [

[1, 2, 3], [4, 5, 6], [7, 8, 9],
[1, 4, 7], [2, 5, 8], [3, 6, 9],
[1, 5, 9], [3, 5, 7]
       
        ];

function checkWin()
{
  return winConditions.some(condition => {
        const [a, b, c] = condition;

const boxA = document.querySelector(`.box[data-index="${a}"]`);
      
const boxB = document.querySelector(`.box[data-index="${b}"]`);

const boxC = document.querySelector(`.box[data-index="${c}"]`);

if (boxA.innerHTML && boxA.innerHTML === boxB.innerHTML && boxA.innerHTML === boxC.innerHTML)
{
boxA.classList.add("winning");
boxB.classList.add("winning");
boxC.classList.add("winning");
            return true;
        }
        return false;
    });
}

function checkDraw() {
    if (isGameOver) {
        return;
    }

    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerHTML !== "X" && box.innerHTML !== "O") {
            isDraw = false;
        }
    });

    if (isDraw) {
        isGameOver = true;
        document.querySelector(".result").innerText = "It's a draw!";
        document.querySelector(".playAgainBtn").style.display = "block";
        disableAllBoxes();
    }
}

function playAgain() {
    turn = "X";
    isGameOver = false;
    turnBox[0].style.backgroundColor = "#091E05";
    turnBox[1].style.backgroundColor = "";
    boxes.forEach(box => {
        box.innerHTML = "";
        box.classList.remove("disabled", "winning");
    });
    document.querySelector(".result").innerText = "";
    document.querySelector(".playAgainBtn").style.display = "none";
}