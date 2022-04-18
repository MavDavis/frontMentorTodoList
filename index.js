let inputTag = document.getElementById('todoItem');
let form = document.querySelector('form');
let buttonSubmit = document.getElementById('submit');
let all =document.getElementById('all');
let done = document.getElementById('done');
let notDone = document.getElementById('notDone');
let clearCompleted = document.getElementById('completed')
all.addEventListener('click', showall);
done.addEventListener('click', showDone);
notDone.addEventListener('click', showNotDone);
clearCompleted.addEventListener('click', clearAllCompleted);
inputTag.addEventListener("keyup",
addToUi);
form.addEventListener('submit', alsoaddToUi)


function alsoaddToUi(){
  let input =inputTag.value;
  var object ={
                name:input
               }
if (input !== '') {

if(localStorage.getItem('output') === null ){

 let output = [];
 output.push(object);
 localStorage.setItem('output', JSON.stringify(output) )
;
document.getElementById('emptylist').style.display = 'flex'
}
else{

 let output = JSON.parse(localStorage.getItem( "output") );
 output.push(object);
 localStorage.setItem('output',JSON.stringify(output) )
;
document.getElementById('emptylist').style.display = 'none'
}
} else{
alert('fill in the details..')
}
fetchList()
} 


function addToUi (event){
  event.preventDefault();
  if (event.key === "enter") {
     let input =this.value;
     var object ={
                   name:input
                  }
  if (input !== '') {
 
  if(localStorage.getItem('output') === null ){
   
    let output = [];
    output.push(object);
    localStorage.setItem('output',JSON.stringify(output) )
;
document.getElementById('emptylist').style.display = 'flex'
}
else{

    let output = JSON.parse(localStorage.getItem( "output") );
    output.push(object);
    localStorage.setItem('output',JSON.stringify(output) )
;
document.getElementById('emptylist').style.display = 'none'
}
} else{
  alert('fill in the details..')
}
fetchList()
}
  }

function fetchList(e){
  let output= JSON.parse( localStorage.getItem('output'));
  all.classList.add('full-opacity');
  let remlist = document.getElementById('remlist');
  
  let text ='';
  text +="<p>"+ output.length+" items left </p>";
  remlist.innerHTML=text;
  ul = document.getElementById('ul');
  ul.innerHTML=''
    for (var i = 0; i < output.length; i++){
      var li = output[i].name;
      var time = output[i].time;
      ul.innerHTML+=`
      <div class="list" >
      <li class="list-tag">
    <input class = "radio" type="radio" onclick="">
    <p>${li}</p>
    <button class="delete" href="#">X</button>
    
    </li>
      </div>
      `;
   removefromStorage(name)
    }
checkDone()
}
function removefromStorage(name){
let del = document.getElementsByClassName('delete');

for(var i = 0; i<del.length; i++){
 
  del[i].addEventListener('click', function(e){
    
    e.preventDefault()
    if(confirm('do you wish to delete?')){
      
      let li = (e.target.parentElement.remove());
    
      var storedList =  JSON.parse( localStorage.getItem('output'));
      for(var i =0; i< storedList.length; i++){
        if(storedList[i].name){
       storedList.splice(i, 1);
      
       localStorage.setItem('output',JSON.stringify( storedList));
       let remlist = document.getElementById('remlist');
  
       let text ='';
       text +="<p>"+ storedList.length+" items left </p>";
       remlist.innerHTML=text;
        }
      }
    
    }
  })

}}

 function checkDone(){
 let radio =document.getElementsByClassName('radio');
for(var i=0; i<radio.length; i++){

  
radio[i].addEventListener('click', function(e){
  e.target.parentElement.classList.toggle('opacity')
})
}

 } 
function showall(){

let li = document.querySelectorAll('li');
for(var i=0; i<li.length; i++){
  li[i].style.display='flex'
}
}
function showDone(){

  let li = document.querySelectorAll('li');
  for(var i=0; i<li.length; i++){
    if(li[i].classList.contains('opacity')){
      li[i].style.display='flex'
    }else{
      li[i].style.display='none'

    }
  } 
}
function showNotDone(){
 
  let li = document.querySelectorAll('li');
  for(var i=0; i<li.length; i++){
    if(li[i].classList.contains('opacity')){
      li[i].style.display='none'
    }else{
      li[i].style.display='flex'

    }
  } 
}
function clearAllCompleted(e){
  let li = document.querySelectorAll('li');
  for(var i= 0; i< li.length; i++){
  if(li[i].classList.contains('opacity')){
li[i].parentElement.remove();

  }
}
  var storedList =  JSON.parse( localStorage.getItem('output'));


 for(let i =0; i< storedList.length; i++){
  let storage =storedList[i];
     console.log(li);
     if(storage.name.classList.contains('opacity')){
    storedList.pop(i);
    localStorage.setItem('output',JSON.stringify( storedList))
    }
   }
}



