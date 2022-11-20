let lastkeys = [];
let konamicode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA", "Enter"];

window.addEventListener('keydown', (e) => {

    console.log(e.code);
    lastkeys.push(e.code);

    if (lastkeys.join(",").endsWith(konamicode.join(","))) {

        lastkeys = [];
        window.location="./cube.html"
    }
});