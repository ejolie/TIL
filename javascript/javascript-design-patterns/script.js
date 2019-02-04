var elem = document.getElementById('cat-img');
elem.addEventListener('click', function() {
  var catCnt = document.getElementById('cat-cnt');
  var num = numSpan.innerText;
  num++;
  numSpan.innerText = num;
}, false);