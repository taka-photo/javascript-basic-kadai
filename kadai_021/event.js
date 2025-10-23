const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）後に実行される処理
  setTimeout(() => {
    text.textContent = 'ボタンをクリックして2秒後にこの文章が表示されました';
  }, 2000);
});