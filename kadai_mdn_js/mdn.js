// 今日の日時オブジェクトを作成
const today = new Date();

// 年・月・日を取得（※月は0始まりなので+1）
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();

// 「2024年10月12日」のように出力
console.log(`${year}年${month}月${date}日`);
