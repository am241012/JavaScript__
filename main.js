// 操作したい要素を取得する
const inputElement = document.getElementById("input");
const textElement = document.querySelector("#default_text p");
const countArea = document.getElementById("count_area");
const upButton = document.getElementById("count_up");
const downButton = document.getElementById("count_down");

// 入力イベント（文字が打たれた時）を監視する
inputElement.addEventListener("input", () => {
  // inputの値を、pタグの中身に代入する
  textElement.textContent = inputElement.value;
  if (textElement.textContent === "") {
    textElement.textContent = "最初の文字";
  }
});

// 現在の数値を管理する変数
let count = 0;

// カウントアップの処理
upButton.addEventListener("click", () => {
  count++; // 数値を1増やす
  updateDisplay();
});

// カウントダウンの処理
downButton.addEventListener("click", () => {
  // 0より大きい時だけ減らす（0未満にしない）
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// 画面の表示を更新する関数
function updateDisplay() {
  countArea.textContent = count + "回";
}
