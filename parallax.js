//var amount scroll
let scrollAfstand;
let sectie2 = document.getElementsByClassName('sectie--2')[0];
let sectie4 = document.getElementsByClassName('sectie--4')[0];
let sectie6 = document.getElementsByClassName('sectie--6')[0];
let indicator = document.getElementById('indicator');
const documentHoogte = document.body.clientHeight;
const viewPortHoogte = window.innerHeight;

window.addEventListener('scroll', (e)=> {
  scrollAfstand = window.pageYOffset;
  console.log(scrollAfstand);
  corrSection2(scrollAfstand);
  corrSection4(scrollAfstand);
  corrSection6(scrollAfstand);
  if (scrollAfstand >= 444) {
    verwijderClassKop();
  }else {
    voegClassKopToe();
  }
  werkIndicatorBij(scrollAfstand);
});


const corrSection2 = (gescrolled) => {
  sectie2.style.backgroundPositionY = -gescrolled/4 + "px";
  sectie2.getElementsByClassName('section__kop')[0].style.marginLeft= -300+gescrolled*2 + "px";
}
const corrSection4 = (gescrolled) => {
  sectie4.style.backgroundPositionY = -gescrolled/3 + "px";
}
const corrSection6 = (gescrolled) => {
  sectie6.style.backgroundPositionY = -gescrolled/2 + "px";
}

const verwijderClassKop =()=>{
  document.querySelector('.sectie--4 h2').classList.remove('sectie--4__kop');
}
const voegClassKopToe =()=>{
  document.querySelector('.sectie--4 h2').classList.add('sectie--4__kop');
}

const werkIndicatorBij = (getal) => {
  indicator.style.width= 100*getal/(documentHoogte-viewPortHoogte) + "%";
}
