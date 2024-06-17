$(document).ready(function(){


    $(window).scroll(function(){
            
        let getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

        if(getscrolltop >= 200){
            $('.navbar').addClass("navmenus");
        }else{
            $('.navbar').removeClass("navmenus");
        }
        
    });

     //  Start Footer Section 

     const getyear = document.getElementById("getyear");
     const getfullyear = new Date().getFullYear();
     getyear.textContent = getfullyear;
 
     // End Footer Section 

});