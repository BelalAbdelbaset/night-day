let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let landText = document.getElementById('land-text');
let sun = document.getElementById('sun8');

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value*2.5 +'px';

  landText.style.fontSize = value +'px';

  if(scrollY >= 67){
    landText.style.fontSize = 67 +'px';
    landText.style.position = 'fixed';
    if(scrollY >= 400){
        landText.style.display = 'none';
    }else{
        landText.style.display = 'block';
    }
    if(scrollY >= 120){
        document.querySelector('.landing').style.background = 'linear-gradient(#376281, #10001f)';
        sun.style.display = 'block';
        sun.style.right = '60px';
        sun.style.bottom = value*0.5 +'px';
        boat.style.opacity = 0.5;

    }else{
        document.querySelector('.landing').style.background = 'linear-gradient(#200016, #1f0016 )'
        sun.style.display = 'none';
        boat.style.opacity = 1;
    }
  }

  mountains3.style.top = value*1.5 +'px';

  mountains4.style.top = value*1.2 +'px';

  river.style.top = value*0.5 + 'px';

  boat.style.left = value*3 + 'px';
  boat.style.top = value*0.5 + 'px';
  

};
