let mouseCursor = document.querySelector(".cursor");
window.addEventListener('mousemove',cursor);
function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

let mouseCursor2 = document.querySelector(".cursorback");
window.addEventListener('mousemove',cursorback);
function cursorback(e){
    mouseCursor2.style.top = e.pageY + 'px';
    mouseCursor2.style.left = e.pageX + 'px';
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const txtAnim = document.querySelector('.container-P0 h3');

new Typewriter (txtAnim, {
    deleteSpeed: 20
})
.changeDelay(80)
.typeString('-- Savoir pour prévoir, afin de pouvoir -- Auguste Comte')
.pauseFor(1000)
.start()