function templ() {
  let exer = document.getElementById('exe');

  let first = Math.floor(Math.random()*10);
  let second = Math.floor(Math.random()*10);
  if(!first) first = Math.floor(Math.random()*10);
  if(!second) second = Math.floor(Math.random()*10);
  exer.innerHTML = `${first}*${second}`;
  localStorage.setItem('first', first);
  localStorage.setItem('second', second);

  let answ0 = document.getElementById('1');
  let answ1 = document.getElementById('2');
  let answ2 = document.getElementById('3');
  let answ3 = document.getElementById('4');
  let answ4 = document.getElementById('5');

  function compareRandom() {
    return Math.random() -0.5;
  }

  let answerArr = [];
  answerArr[0] = first * second;
  for(let i = 1; i < 5; i++){
    let ran1 = Math.floor(Math.random()*10);
    if(!ran1) ran1 = Math.floor(Math.random()*10);
    let ran2 = Math.floor(Math.random()*10);
    if(!ran2) ran2 = Math.floor(Math.random()*10);
    answerArr.push(ran1 * ran2);
  }

  answerArr = answerArr.sort(compareRandom);

  answ0.innerHTML = answerArr[0];
  answ1.innerHTML = answerArr[1];
  answ2.innerHTML = answerArr[2];
  answ3.innerHTML = answerArr[3];
  answ4.innerHTML = answerArr[4];

}

function equals(e) {
  let point = document.getElementById('point');
  let first = localStorage.getItem('first');
  let second = localStorage.getItem('second');
  if(e.target.innerText == first * second) {
    point.innerText = +point.innerText + 100;
    templ();
  }
  else {
    if(+point.innerText) point.innerText = +point.innerText - 100;
    alert("Лошара!!!");
  }

}
