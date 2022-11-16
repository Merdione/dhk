
function home() {
    document.getElementById('contact').style.display = 'none';
    document.getElementById('hakkımızda').style.display = 'block';
    document.getElementById('sponsorlar').style.display = 'none';
    document.getElementById('galeri').style.display = 'none';

    
}


function contact() {
    document.getElementById('contact').style.display = 'block';
    document.getElementById('hakkımızda').style.display = 'none';
    document.getElementById('sponsorlar').style.display = 'none';
    document.getElementById('galeri').style.display = 'none';
}
function sponsorlar() {
   
    document.getElementById('contact').style.display = 'none';
    document.getElementById('hakkımızda').style.display = 'none';
    document.getElementById('sponsorlar').style.display = 'block';
    document.getElementById('galeri').style.display = 'none';


}

function galeri() {
    document.getElementById('contact').style.display = 'none';
    document.getElementById('hakkımızda').style.display = 'none';
    document.getElementById('sponsorlar').style.display = 'none';
    document.getElementById('galeri').style.display = 'block';
  

}


function slider() {
 

        document.getElementById('slider').style.backgroundImage = "url('img3.png')"
  
 
 
  
}



setInterval(function() {
    
    var text = document.getElementById('mail').value;
    let div = document.querySelector('#input-button');
    if(text.includes('@gmail.com') || text.includes('@hotmail.com') ) {
        document.getElementById('input-button').disabled = false;
        document.getElementById('input-button').style.backgroundColor = 'rgb(3, 20, 77)'
        div.classList.add('hover');
    
    }

    else {
        document.getElementById('input-button').disabled = true;
        document.getElementById('input-button').style.backgroundColor = 'gray'
        div.classList.remove('hover');
 
      
    }
},200)


