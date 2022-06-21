const a = 60;
const b = 60;
const c = -40;

if (a + b + c === 180) {
    console.log(true);
}
else if (a < 0 || b < 0  || c < 0) {
    console.log("inválido");
}
else {
    console.log(false);
}