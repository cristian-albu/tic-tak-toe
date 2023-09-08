let turns = 0;
function handleClick() {
    if (this.innerText.length === 0) {
        if (turns % 2 === 0) {
            this.innerText = "X";
        } else {
            this.innerText = "0";
        }
    }
    turns += 1;
}

for (let i = 0; i < 9; i++) {
    const square = document.getElementById(String(i + 1));
    square.addEventListener("click", handleClick);
}
