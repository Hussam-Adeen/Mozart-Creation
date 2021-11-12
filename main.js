document.querySelector('.out').onclick = function() {
 document.querySelector('.links').style.display = 'block'
}

window.onscroll = function() {
 document.querySelector('.links').style.display = 'none'
 if (window.scrollY >= 150) {
  document.querySelector('.btn').style.display = 'block'
 } else { document.querySelector('.btn').style.display = 'none' }
}

document.querySelector('.btn').onclick = function() {
 window.scrollTo({
  top: 0, behavior: 'smooth'
 })
}
