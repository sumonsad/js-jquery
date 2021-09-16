var a ="dhaka";
        var n = 20;
        var b = false;
        console.log(typeof(a));
        console.log(typeof(n));
        console.log(typeof(b));

        var x=20;
        x-=10;
        console.log(x);
    
        var x= 10;
        var y= 20;
        var sum = x+y;
        var sub = x-y;
        var mul = x*y;
        var div = x/y;
        console.log("sum ="+sum);
        console.log(sub);
        console.log(mul);
        console.log(div);

        var x=10;
        var y=20;
        console.log(x>y || y>x);
        console.log(x>y && y>x);
        console.log(x!=10);

        function myFunction(x1, x2, x3){
            if(x3==='sum'){
                return x1+x2;
            }
            else if(x3==='sub'){
                return x1-x2;
            }
            else if(x3==='mul'){
                return x1*x2;
            }
            else if(x3==='div'){
                return x1/x2;
            }
        }
        console.log (myFunction(30,20,'sum'));
        console.log (myFunction(30,20,'sub'));
        console.log (myFunction(30,20,'mul'));
        console.log (myFunction(30,20,'div'));

    // $(document).ready(function(){
    //         code here;
    //     });

        (function($){
            // $('.heading').css('color','red');
            // $('.heading').click(function(){
            //     $('.heading').css('font-size','70px');   
            // });

            // $('.heading').dblclick(function(){
            //     $('.heading').css('font-size','70px');   
            // });

            // $('.heading').mouseenter(function(){
            //     $('.heading').css('font-size','70px');   
            // });

            // $('.heading').mouseleave(function(){
            //     $('.heading').css('font-size','70px');   
            // });

            // $('.heading').mouseenter(function(){
            //     $(this).css('color','blue');   
            // });

            // $('.hide').click(function(){
            //     $('.lorem').hide(3000);   
            // });
            // $('.show').click(function(){
            //     $('.lorem').show(3000);   
            // });


            // $('.hide').click(function(){
            //     $('.lorem').fadeOut(3000);   
            // });
            // $('.show').click(function(){
            //     $('.lorem').fadeIn(3000);   
            // });
            // $('.toggle').click(function(){
            //     $('.lorem').fadeToggle(3000);   
            // });

            // $('.hide').click(function(){
            //     $('.lorem').slideUp(3000);   
            // });
            // $('.show').click(function(){
            //     $('.lorem').slideDown(3000);   
            // });
            // $('.toggle').click(function(){
            //     $('.lorem').slideToggle(3000);   
            // });

            // $('.lorem').addClass('newclass');

            // $('.lorem').removeClass('newclass');

            // $('.toggle').click(function(){
            //     $('.lorem').toggleClass('newclass');
            // });

            // $('.toggle').click(function(){
            //     $('.lorem').text();  
            // });

            // $('.toggle').click(function(){
            //     $('.lorem').text('new text added');  
            // });

            // $('.toggle').click(function(){
            //     $('.fruits').append('<li>Orange</li>');  
            // });

            // $('.toggle').click(function(){
            //     $('.fruits').prepend('<li>Orange</li>');  
            // });

            // $('.toggle').click(function(){
            //     $('.fruits').before('<p>Orange</p>');  
            // });

            // $('.toggle').click(function(){
            //     $('.fruits').after('<p>Orange</p>');  
            // });

            // $('.toggle').click(function(){
            //     $('.fruits').remove();  
            // });

            // $('.toggle').click(function(){
            //     $('.fruits').empty();  
            // });

            // $('.toggle').click(function(){
            //     $('.fruits').css({
            //         'background-color':'red',
            //         'color':'white',
            //         'padding':'10px',
            //         'font-size':'20px'
            //     });  

            // $('.toggle').click(function(){
            //     var i=10;
            //     $('ul li').each(function(){
            //         i++;
            //         $(this).css({
            //             'background-color':'yellow',
            //             'margin-bottom': i+'px'
            //         });
            //     });
            // });

            $('.toggle').click(function(){
                var i=0;
                $('ul li').each(function(){
                    i++;
                    $(this).addClass('color-'+i);
                    });
                });

            

        })(jQuery);