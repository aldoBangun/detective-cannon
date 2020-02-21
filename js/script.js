const puppil = document.querySelector('.puppil');

document.body.addEventListener('mousemove',function(e){
    const xPos = Math.round(e.clientX / window.innerWidth * 50);
    const yPos = Math.round(e.clientY / window.innerHeight * 70);
    puppil.style.transform = 'translate('+xPos+'px,'+yPos+'px)';
});

const h1 = document.createElement('h1');
const title = document.createTextNode('I see everything');
h1.appendChild(title);
h1.setAttribute('class','title');

const mHead = document.querySelector('div.head');
document.body.insertBefore(h1,mHead);

const dot = document.createElement('div');
dot.setAttribute('class','hidden-dot');
dot.addEventListener('click',function(){
    document.body.style.cursor = 'default';
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.innerHTML = 'Heheh.. Gotcha!! ^_^';
    setTimeout(function(){
        h1.innerHTML = 'GO TO NEXT LEVEL';
        dot.style.display = 'none';
        dot.style.pointerEvents = 'none';
        h1.addEventListener('click',function(){
            alert('game is under construction. Stay Tuned! :P');
        });
    },2000);
});
document.body.appendChild(dot);