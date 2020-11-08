// ユーザ側にじゃんけんの手を入力してもらう
let user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー・チョキ・パーから選んでください');
}
// javascriptの手を作成する関数を呼び出し、js_handに代入する
const js_hand = get_js_hand();
// ユーザとjavascriptのじゃんけんの結果を呼び出し、引数にユーザ側とjavascriptの結果を渡す。
const result = winLose(user_hand, js_hand);
// 結果を表示
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + result + 'です。');
} else {
  alert("またチャレンジしてね")
}
// javascriptのじゃんけんの手を作成する関数
function get_js_hand(){
  // Math.floorで小数点を切り捨てし、0~2までの整数をランダムに生成
  const js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name
  if (js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}
// ユーザとjavascriptの手を比べる関数。
function winLose(user, js){
  let winLoseStr
  // もしユーザの手がグーでjavascriptの手がグーだったらwinLoseStrに"あいこ"と代入する
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}


