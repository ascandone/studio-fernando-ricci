/*
  Handle nav bar show/hide button
 */
$('#hamburger-menu').addEventListener('click', () => {
  $('#nav-bar').classList.toggle('visible');
})

/*
  Mark the active link on nav bar
 */
$$('#nav-bar ul a')
  .filter(a => a.href === window.location.href)
  .forEach(a => a.classList.add('active-link'))

/*
  Hide offer if is not the first visit
 */

// const SHOW_OFFER = true
// 
// if(SHOW_OFFER || localStorage.visited != 1){
//   $('.already-visited').classList.remove('already-visited')
// }
// 
// window.onbeforeunload = _  => { localStorage.visited = 1 };

/*
 Handle swipe of nav bar
 */
const SWIPE_TRESHOLD = 80

function swipeListen(el, cb) {  
  let startX = 0, startY = 0, endX = 0, endY = 0;
  
  el.addEventListener('touchstart', ({touches}) => {
    console.log(touches)
    const {screenX, screenY} = touches[0]
    startX = screenX
    startY = screenY
    endX = screenX
    endY = screenY
  }, false)
  
  el.addEventListener('touchmove', ({touches}) => {
    const {screenX, screenY} = touches[0]
    endX = screenX
    endY = screenY
  }, false)

  el.addEventListener('touchend', _ => { cb({dx: endX - startX, dy: endY - startY}) }, false)

}

const navBar = $('#nav-bar')

swipeListen(navBar, ({dx}) => {
  if(dx > SWIPE_TRESHOLD) navBar.classList.remove('visible')
})

swipeListen($('main'), ({dx}) => {
  if(dx < -SWIPE_TRESHOLD) navBar.classList.add('visible')
})
