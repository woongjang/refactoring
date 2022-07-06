const height = 1;
const width = 1;

// 리팩토링 전
let a = height * width;

// 리팩토링 후
let area = height * width;



let titleData = 'untitled';
let result = '';
let obj = {
  articleTitle: '',
};
result += `<h1>${titleData}</h1>`;

setTitle(obj['articleTitle']);

function title() {
  return titleData;
}
function setTitle(arg: string) {
  titleData = arg;
}

