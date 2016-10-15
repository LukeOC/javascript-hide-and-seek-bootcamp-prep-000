function getFirstSelector(selector) {
  var x = document.querySelector(selector);
  return x;
}

function nestedTarget() {
var x =  document.querySelector('#nested .target');
return x;
}

function increaseRankBy(n) {
var x = document.querySelectorAll('.ranked-list li')
  for (let i = 0, l = x.length; i < l; i++) {
    x[i].innerHTML = parseInt(x[i].textContent, 10) + n;
  }
}


function deepestChild() {
var y = document.querySelector('#grand-node div div div div');
return y;
}
