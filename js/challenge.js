
let counter = document.querySelector('#counter')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let like = document.querySelector('#heart')
let likeList = document.querySelector('.likes')
let submitComment = document.querySelector('#comment-form')
let timeoutID;

function setOutput(element,outputContent) {
  element.textContent = outputContent;
}

function startCounter(timeoutSeconds = 1) {
  timeoutID = setInterval(incrementCount, timeoutSeconds*1000);
  toggleLabel(pause)
  changeOnclickAttr(pause,'clearMessage()')

  changeOnclickAttr(plus,'incrementCount()')
  changeOnclickAttr(minus,'decrementCount()')
  changeOnclickAttr(like,'addLikeComment()')
  submitComment.addEventListener('submit', (e) => {
    e.preventDefault()
    let x = e.target.children.comment.value
    let p = document.createElement('p')
    p.textContent = x
    document.querySelector('.comments').append(p)
  })
}

function incrementCount(numChange=1){
  let numCount = parseInt(counter.textContent)
  let newNumber = numCount + numChange;
  setOutput(counter,newNumber)
}

function decrementCount(numChange=1){
  let numCount = parseInt(counter.textContent)
  let newNumber = numCount - numChange;
  setOutput(counter,newNumber)
}

function clearMessage() {
  clearTimeout(timeoutID);
  toggleLabel(pause)
  changeOnclickAttr(pause,'startCounter()')
}

function changeOnclickAttr(element,func){
  element.setAttribute('onclick', func)
}

function toggleLabel(element, param1=' resume ', param2=' pause ') {
  element.textContent = (element.textContent===param1)?param2:param1
}

function addLikeComment() {
  currentCount = counter.textContent
  let p = document.createElement('p')
  p.textContent = `${currentCount} has been liked`
  likeList.append(p)
  
}

startCounter()

