function display(a){
  var html='';
    html+=a.title+'<br>';
  document.querySelector('#output').innerHTML=html
}

function note(){
  var n=document.querySelector('#notes').value;
  fetch('https://jsonplaceholder.typicode.com/todos/'+n)
  .then(response => response.json())
  .then(json =>  display(json))
}