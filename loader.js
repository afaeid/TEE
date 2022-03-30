 var preLoader = document.getElementById('preloader');
  window.addEventListener('load',function(){
    preLoader.style.display = 'none';
  })
  
  
 var vidLoader = document.getElementById('vid_loader');
  document.getElementById('vid').addEventListener('load', function() {
   vidLoader.style.display = 'none';
      })
// console.log('load');
