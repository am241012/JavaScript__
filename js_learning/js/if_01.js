// emailとpasswordの入力バリデーションチェックのフォーム作成課題
// 期限 4/23
// branch名: feature/form

// email: kababrawp@kabab.com
// password: kabab0000

// 共通 未入力になったら「必須項目です」と表示する
// emailの入力形式以外の場合「emailの入力形式で記載してください」と表示する
// 上記のemailではない場合「emailが違います」と表示する
// passwordの条件「英数字8文字以上」を満たしていない場合「英数字8文字以上で記載してください」と表示する
// 上記のpasswordではない場合「passwordが違います」と表示する

// ---------- ↓ ここから ↓ ----------
const idinput = document.getElementById("idnotoko");
const passinput = document.getElementById("passnotoko");
const errormessage = document.getElementById("errormassege_id");
const errormessage_pass = document.getElementById("errormessage_pass");

function fillin(event) {
  const idinput = event.target.value;
  if (idinput === "") {
    errormessage.textContent = "必須項目です";
  }
}

idinput.addEventListener("input", fillin);

function fillin_pass(event) {
  const passcheck = /^([a-zA-Z0-9]{8,})$/;
  const passvalue = event.target.value;
  console.log(passcheck.test(passvalue));

  if (passvalue.test(passcheck) === false) {
    errormessage_pass.textContent = "英数字8文字以上で記載してください";
  }
  if (passvalue === "") {
    errormessage_pass.textContent = "必須項目です";
  }
}

passinput.addEventListener("input", fillin_pass);
