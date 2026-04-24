// DOM操作でHTMLからidを取得する
const inputarea = document.getElementById("databox");
const output = document.getElementById("output");

// inputされたことを認識させる
(inputarea, addEventListener("input", handleChange));
//   > その中に置き換えたいやつにinputの中身を渡す関数を用意する
function handleChange(event) {
  const value = event.target.value;
  output.textContent = value;
  //   > inputの中身が空なことを認識させる
  //   > 空な時に表示させたい文字を入れる
  if (value === "") {
    output.textContent = "最初の文字";
  }
}

// clickされたことを認識させる
const countup = document.getElementById("countup");
const countdown = document.getElementById("countdown");
const kekka = document.getElementById("count");

//   > カウントを定義する
let count = 0;
console.log(count);
//   > カウントアップさせる関数とカウントダウンさせる関数を用意する
function numup() {
  count = count + 1;
  console.log(count);
  kekka.textContent = count;
}
countup.addEventListener("click", numup);

function numdown() {
  if (count > 0) {
    count = count - 1;
  }

  console.log(count);
  kekka.textContent = count;
}
countdown.addEventListener("click", numdown);
