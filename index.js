let isPurple = false;

function changeC() {
    const box = document.querySelector('.box');
    if(isPurple){
        box.style.color='';
    }else{
        box.style.color='purple';
    }
    isPurple = !isPurple;

}