let boxes = document.querySelectorAll(".button");
let restart = document.querySelector(".playagain-button");
let message = document.querySelector("#msg");
let container = document.querySelector(".msg-container");
let reset = document.querySelector(".reset-button");
let turn = true;
let arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn == true) {
      box.innerText = "X";
      turn = false;
    } else if (turn == false) {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const restartgame = () => {
  turn = true;
  enablebox();
  container.classList.add("hide");
};

const disablebox = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enablebox = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showinner = (winner) => {
  message.innerText = `CONGRATS THE WINNER IS ${winner}`;
  container.classList.remove("hide");
  disablebox();
};
function checkwinner() {
  for (let checker of arr) {
    let pos1 = boxes[checker[0]].innerText;
    let pos2 = boxes[checker[1]].innerText;
    let pos3 = boxes[checker[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showinner(pos1);
      }
    }
  }
}
restart.addEventListener("click", restartgame);
reset.addEventListener("click", restartgame);