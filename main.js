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





let name = document.querySelector('.text')
let gender = document.querySelector('.gender')
let button = document.querySelector('.btnA')
let message = document.querySelector('.message')


button.onclick = function() {

 if (name.value === '') {
  document.querySelector('.message h3 span').innerHTML = `Unknown`
 }

 if (name.value !== '') {

  if (gender.value === 'Male' || gender.value === 'male' || gender.value === 'ذكر') {
   document.querySelector('.message h3 span').innerHTML = `Mr.${name.value}`
  } else if (gender.value === 'Female' || gender.value === 'female' || gender.value === 'انثى' ) {
   document.querySelector('.message h3 span').innerHTML = `Ms.${name.value}`
  } else { document.querySelector('.message h3 span').innerHTML = name.value }

 }

 document.querySelector('.form').style.cssText = 'display: none'

 document.querySelector('.message').style.cssText =

  'position: fixed; left: 50%; top: 80%; transform: translate(-50%, -50%); '

}


document.querySelector('.span').onclick = function() {
 document.querySelector('.message').style.cssText = 'display: none'
}

window.onload = function() {

 document.querySelector('.form').style.cssText =

  'position: fixed; left: 50%; top: 80%; transform: translate(-50%, -50%); '

}
