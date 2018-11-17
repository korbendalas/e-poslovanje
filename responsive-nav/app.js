$( document ).ready(function() {
    
    $('.menu').click(function(){
        console.log('Kliknuto?');
        
        $('ul').toggleClass('active'); 
        //adds .active class to UL element with "display:block"

    })
});