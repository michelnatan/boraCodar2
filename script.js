

function changeImage(){

    caminhoImage =  document.getElementById('vector').src
    console.log(caminhoImage);

    if(caminhoImage.includes('/images/x.png')){
        document.getElementById('vector').src = './images/360.png';
        document.getElementById('videoSofa').hidden = true
        document.getElementById('imageSofa').hidden = false
        
    }else{
        document.getElementById('vector').src = './images/x.png';
        document.getElementById('videoSofa').hidden = false 
        document.getElementById('imageSofa').hidden = true
    }
};