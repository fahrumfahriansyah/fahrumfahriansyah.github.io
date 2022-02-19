$('.page-scroll').on('click', function(e){

/*ambil isi href*/

var tujuan = $(this).attr('href');
/*tangkap elemen*/
var elemenTujuan = $(tujuan);
/*pindahkan scrol*/
$('body').animate({
 
  scrollTop: elemenTujuan.offset().top - 50
});
e.preventDefault();
});


// parallax

//about
$(window).on('load',function(){

   $('.pkiri').addClass('phadir');
   $('.pkanan').addClass('phadir');

});




$(window).scroll(function(){
 
    var wScroll = $(this).scrollTop();

    //jumbroton
    
    $('.jumbotron img').css({

          'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });    
    
    $('.jumbotron h1').css({

          'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    }); 
    

    $('.jumbotron p').css({

          'transform' : 'translate(0px, '+ wScroll/1.6 +'%)'
    }); 
      
      //portfolio


    if(wScroll > $('.portfolio').offset().top - 250 ){
          
          $('.portfolio .thumbnail').each(function(i){
         
               setTimeout(function() {

                      $('.portfolio .thumbnail').eq(i).addClass('hadir');

               },500 * (i+1)); 

});
          

    }

});



