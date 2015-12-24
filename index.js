function christmasTree(height){
  var star = document.createElement('p');
  star.id = 'star';
  star.innerHTML = '*';
  document.getElementById('container').appendChild(star);


  if(height===1){
    var green = document.createElement('p');
    green.className = 'green';
    green.innerHTML = '0';
    document.getElementById('container').appendChild(green);
  }
  else{
    var lau  = document.createElement('p');
   lau.className = 'green';
    lau.innerHTML = '0';
    document.getElementById('container').appendChild(lau);

      var arrayOfZero = ['0'];

    for(var i = 1 ; i < height ; i++){

      arrayOfZero.push('00');
      var set = arrayOfZero.join('');
      var leaf = document.createElement('p');
      leaf.className = 'leaf';
      leaf.innerHTML = set;
      document.getElementById('container').appendChild(leaf);


    }


  }

  var stump = document.createElement('p');
  stump.id = 'stump';
  stump.innerHTML = '||';
  document.getElementById('container').appendChild(stump);


}

christmasTree(6);