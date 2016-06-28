var qs = function (selector){
  return document.querySelector(selector)
}

var box1 = qs('.box1'),
 box2 = qs('.box2'),
 box3 = qs('.box3'),
 changeView1 = qs('.toggle1'),
 changeView2 = qs('.toggle2'),
 changeView3 = qs('.toggle3')

//Function for box 1!!!!
 changeView1.addEventListener('click', function() {
   if (box1.classList.contains('invisible')) {
     box1.classList.remove('invisible')
   }
    box2.classList.add('invisible')
    box3.classList.add('invisible')
 })

 /// Function for box 2!!!!
 changeView2.addEventListener('click', function() {
   if (box2.classList.contains('invisible')) {
     box2.classList.remove('invisible')
   }
    box1.classList.add('invisible')
    box3.classList.add('invisible')

 })
//_-*****************************
 //function for box 3!!!!
 changeView3.addEventListener('click', function() {
   if (box3.classList.contains('invisible')) {
     box3.classList.remove('invisible')
   }
    box1.classList.add('invisible')
    box2.classList.add('invisible')
 })


 $(document).ready(function() {
     $('.burn').burn();
 });
