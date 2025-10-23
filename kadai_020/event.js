
const addBtn = document.getElementById('btn');
const parentList = document.getElementById('text');

addBtn.addEventListener('click', () => {
  parentList.textContent = 'ボタンをクリックしました';
});
