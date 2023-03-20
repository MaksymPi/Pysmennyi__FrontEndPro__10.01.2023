const block = document.querySelector('.block');

const menuInput = document.getElementById('input');

menuInput.onfocus = function(){
  console.log('Focus');
  block.classList.add('show')
  block.classList.remove('block')
};

menuInput.onblur = function(){
  console.log('blur');
  block.classList.add('block')
  block.classList.remove('show')
}
