//日付
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const day2 = date.getDay();
const dayList = ['日', '月', '火', '水', '木', '金', '土'];
const labelList = dayList[day2];
const label = `${month}月${day}日`;

document.querySelector(
  '#log'
).innerHTML = `本日は${label}  ${labelList}曜日です`;
