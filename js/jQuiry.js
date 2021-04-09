// get / set
// Traversing = siblings / next /nextAll / nextUntil / prev / prevAll / preUntil
// Selectors = first-child / last-child / first-of-type / last-of-type / nth-child / nth-last-child / nth-of-type / nth-first-of-type
// [ jQuery In Arabic ] #25 - Selectors Reference Part 6
/*
e.altKey
e.ctrlKey
e.shiftKey
e.target.innerText
e.target.innerHTML
*/
/* 
========================================== 
syntax jQuery
========================================== 
*/
$ = jQuery
(Element)
.Action()

$(document).ready(function(){

    $("p").css("color", "red");
    $("p").hide();
});

/* 
========================================== 
Events
========================================== 
*/
$(document).ready(function(){

	$("button").hover(function(){
	
	$("p").css("color","red")
	
	},function(){
	
		$("p").css("color","blue")
	
	})
	});

/*-------------

$("button").click(function(){

$(this).css("color","red")
$("p").css("color","blue")
});
==========================
$("button").dblclick(function(){

$(this).css("color","red")
$("p").css("color","blue")
});
==========================
$("button").mouseenter(function(){

$(this).css("color","red")
$("p").css("color","blue")
});
==========================
$("button").mouseleave(function(){

$(this).css("color","red")
$("p").css("color","blue")
});
==========================
$("button").hover(function(){

$("p").css("color","red")

},function(){

    $("p").css("color","blue")

})
});
*/
/* 
========================================== 
Effects = show / hide / toggle
========================================== 
*/
/*--
//syntax
show(speed, function/ effict/ action)
hide(speed, function/ effict/ action)
toggle(speed, function/ effict/ action)
--*/

$(document).ready(function(){

	$("button").click(function(){
	
	$('p').toggle("fast", function(){
	
		$("#fop").toggle();
	});
	
	})
	});
/* 
========================================== 
effects for opacity = fadeIn / fadeOut / fadeToggle / fadeTo
========================================== 
*/
/*-----
syntax
fadeIn(speed,function)
fadeOut(speed,function)
fadeToggle(speed,function)
fadeTo(speed,opacity,function)
----------------------------------------
fadeIn = show opacity from 0 to 1
fadeOut = show opacity from 0 to 1
fadeToggle = marge between fadein && fadeout
fadeTo = show opacity from 1 to u chosed
----------------------------------------
------*/
$(document).ready(function(){
    $("button").click(function(){
        $('p').fadeTo("fast",0.5, function(){
            $("button").hide("slow");
        });
    })
})
/* 
========================================== 
effects for height slideDown / slideUp / slideToggle
========================================== 
*/
$(document).ready(function(){
    $(".btn").click(function(){
        $(".par").slideToggle("fast", function(){
            $(".btn").hide();
        });
    })
});
/* 
========================================== 
animate = syntax: $(elemebt).animate({},speed,function);
========================================== 
        top:+='200px'
*/
$(document).ready(function(){

    $('.btn').click(function(){
    $('.par').animate({
        top:'200px'
    }, "slow");
    $('.par').animate({
    left:'150px',
    }, "slow");
    $('.par').animate({
        height:'700px',
        fontSize:'25px',
        }, "slow");
    $('.par').animate({
    border: '1px solid red',
            }, "slow");
    /*---------------------------*/
    $('.par').animate({
        height:'100px',
        fontSize:'18px',
            }, "slow");
    $('.par').animate({
        left:'50px',
        }, "slow");
    $('.par').animate({
        top:'-200px'
        }, "slow");
    $('.par').animate({
        border: '1px solid red',
        }, "slow");
    
    });
    })
/* 
========================================== 
stop = syntax : $(element).stop(ClearQueue,goToEnd); 
========================================== 
use : true,false
*/
$(document).ready(function(){
    $('.Stop').click(function(){
        $('.par').stop(true,true);
    });
$('.Start').click(function(){
    $('.par').animate({
        top:'200px'
    }, "slow");
    $('.par').animate({
        left:'400px'
    }, "slow");
    $('.par').animate({
        width:'400px'
    }, "slow");
    $('.par').animate({
        height:'+=30px'
    }, "slow");
    $('.par').animate({
        top:'-50px'
    }, "slow");
});
});
/* 
========================================== 
chain
========================================== 
*/
$(document).ready(function(){
    $('.Start').click(function(){
        $('.par')
        .css({background:'rgb(0, 0, 255)'})
        .slideUp("slow")
        .slideDown('slow')
        .animate({left:'450px'})
        .hide("slow");
    });
});
/*----------other way--------------------------*/
$(document).ready(function(){
    $('.Start').click(function(){
        var dom = $('.par');
        dom.slideUp('slow')
        dom.slideDown('slow')
        dom.hide('fast');
    });
});

/* 
========================================== 
HTML get && set = text() / html() / val() / attr() 
========================================== 
*/
$(document).ready(function(){
    $('.btn').click(function(){
        $('.lpo').text($('.lok').val());
            $('.lope').text($('.jop').attr("class"));
                $(".lok").val($(".htmo").attr("class"));
    });
});
/* 
========================================== 
HTML append prepend appendTo prepentTo after before
========================================== 
*/
$(document).ready(function(){
    $('.btn').click(function(){
        $('.not')
        .prepend('<h3>Created by prepend</h3>') // in the first element div
        .append('<h3>Created by append </h3>')  // in the last element div
        .before('<h3>Created by before</h3>') // before the element div
        .after('<h3>Created by after</h3>'); // after the element div
        $('<h3>Created by prependTo</h3>')
        .prependTo('.hot');  // in the first element div
        $('<h3>Created by appendTo</h3>')
        .appendTo('.hot');   // in the last element div
    });
});
/* 
========================================== 
Remove && empty
========================================== 
*/
$(document).ready(function(){
    $('.btn').click(function(){
        $('.hot').empty(); // Clear what inside the element div
        $('.not').remove(); // Remove element comlitly
    });
});
/* 
========================================== 
addClass / removeClass / toggleClass
========================================== 
*/
$('.btn').click(function(){
    $("p:eq(1)").toggleClass('lama');
});
/* 
========================================== 
get / set = css
========================================== 
*/
$(document).ready(function(){
    $('.btn').click(function(){
        var inp = $('.open').val();
        $('p').css({
            "color":"red",
            "backgroundColor":inp,
            "margin":"10px",
            "padding":"20px",
        });
    });
});

===============================

$(document).ready(function(){
    $('.btn').click(function(){
        var oo = $('p').css('backgroundColor');
        var lki = $('.po').val();
        $('.open').val(oo);
        $('p').css({'backgroundColor':lki});
    });
});
/*  html
            <button class="btn">click here</button><br>
            <input type="text" class="open"><br><br>
            <input type="text" class="po">
            <p>hello</p>
            <p>welcom</p>
*/
/* 
========================================== 
Dimensions = width / innerWidth / outerWidth / and height
========================================== 
*/
/*----------
width / clculate width only
innerWidth / clculate width and padding
outerWidth / clculate width and padding and border and {margin} if added true 
height
innerHeight
outerHeight
------------*/
//Ex1
$(document).ready(function(){
    $('.dv').click(function(){
        var vw = $(this).innerWidth();
        var re = $(this).innerWidth();
        $(this).text(vw);
        console.log(vw);
    });
});
//Ex1
$(document).ready(function(){
    $('.par1').click(function(){
        $(this).width("+=" + 50);
        if($(".par1").width() === 700){
            $('.par1')
            .css({
                "color": "red",
                "backgroundColor":"black"
            })
            .slideUp("slow")
        } else {
            console.log($(".par1").width());
        }
    });
});
/* 
========================================== 
Traversing = parent / parents / parentsUntil
========================================== 
*/
/*
parent() //// is the parent section is body
parents() //// is the parent p is div and section and body ++ / u need to put value class for chose element like  parents(".container")
parentsUntil() //// default is chose all elements but u can put value class to it for stop
*/
$(document).ready(function(){
    $('span').parentsUntil(".no").css("border","1px solid white");
});
/* 
========================================== 
Traversing = children / find
========================================== 
*/
/*
children is the element that after u chosed
find
*/
$(document).ready(function(){
    $('section').find(("p:contains('to')")).css("border","1px solid white");
});
/* 
========================================== 
Traversing = siblings / next /nextAll / nextUntil / prev / prevAll / preUntil
========================================== 
*/
/*
siblings // with (this) will chose everything without the element u click on it
next 
nextAll // with (this) will be chose next element u can put value class if u want to chose that
nextUntil // means stop at certain element by class
prev
prevAll
prevUntil
*/
$(document).ready(function(){
    $("div,p").click(function(){
        $(this).next().css("background","red");
    });
});

/* 
========================================== 
Traversing = eq / first / last / filter / not
========================================== 
*/
/*
eq // eq(index) // take index
first
last
filter // syntax =  filter(":contains("text")") u can type also value class
not // =/ filter
*/
$(document).ready(function(){
    $("div").filter(".w").css("background","red");
});
/* 
========================================== 
Selectors Reference
========================================== 
*/
$(document).ready(function(){
    $("div:even").css("background","red")
    $("div:odd").css("background","blue")
    $('div*').css("border","2px solid white")
    $('div:first,div:last').css("color","blue")
});
/* 
========================================== 
Selectors = first-child / last-child / first-of-type / last-of-type / nth-child / nth-last-child / nth-of-type / nth-first-of-type
========================================== 
*/
/*
first-child // it chose first child of each element.
last-child /
first-of-type //  it chose the first element of each kind it is chose first of type only.
last-of-type /
nth-child() // it is chose by number ,if it found the number u are weitten and element u chosed = true
nth-last-child() // it is chose from kast to first if the number and ekement = true
nth-of-type() // it is chose by number and element = true
nth-last-of-type() // 
*/
$(document).ready(function(){
    $("div:nth-of-type(4)").css("background","blue")
});
/* 
========================================== 
Selectors = only-child / only-of-type / > / + / ~ / not / gt() / lt()
========================================== 
*/
$(document).ready(function(){
    $('p ~ aside ').css("border","2px solid red");
});

/*
only-child // who has one element of parent only
only-of-type // who has one element from same kind of child
> // direct child
+ // means next Ex: div + p (who has div parent and p child)
~ siblings // brother of elements lik ("div ~ p") that is div {up} and p {down}
gt() // means greater than by index number from 0 to ++
lt() // means smaller than by index number from 0 to ++
not // chose everything without that u type in (not)
*/

/*
$(document).ready(function(){
    $('p ~ div ').css("border","2px solid red");
});

Ex for ~ 

            <div>this is div</div>
            <div>this is div</div>
            <p>this is p</p>
            <p>this is p</p>
            <p>this is p</p>
            <div>this is div</div>
            <div>this is div</div>

*/
/* 
========================================== 
Selectors = :header / :animated / :contains() / :has() / :empty / :parent / :hidden / :visible / :root / :lang()
========================================== 
*/
$(document).ready(function(){
    $(":header").css("color","red")
    $("div").animate({
        width :"600",
    }, 5000);
    $(":animated").css("background", "blue")
    $("input").focus()
    $("p:contains('2')").css("background","blue")
    $("div:has('p')").hide()
    $(":empty").css("background", "yellow")
    $("span:parent").css("background", "yellow")
    $("button").click(function(){
        $("div:visible").slideToggle();
        $("div:hidden").slideToggle();
    })
});

/*
:header / all header (h1,h2,h3,h4,h5,h6)
:animated
.focus() / 
:contains()
:has()
:empty
:parent
:hidden
:visible
:root
:lang()
*/
/* 
========================================== 
Selextor Attribut = * / ~ / ^
========================================== 
*/
$(document).ready(function(){
    $("img").css("borderRadius", "50%")
    $("img[title='image 1']").css("borderRadius", "50%")
    $("img[title*='image']").css("borderRadius", "50%")
    $("img[title~='image']").css("borderRadius", "50%")
    $("img[title^='image']").css("borderRadius", "50%")
});

/* 
* = // :contains searching by letter any letter
~ = need text completely
^ = any text start will be true
*/
/* 
========================================== 
Event bind = singel event / multi event / map event / custom event
========================================== 
mote :   bind ///////// not use it > use on()
*/

// singal event
$(document).ready(function(){
    $(".btn").click(function(){
        $(".div").css("background","blue");
    });
});

// multi event
$(document).ready(function(){
    $(".btn").bind("mouseenter mouseleave",function(){
        $(".div").toggleClass("this")
    });
});

// map event
$(document).ready(function(){
    $(".btn").bind({
        click: function(){
            $(".div").css("background","green")
        },
        dblclick: function(){
            $(".div").css("background","blue")
        },
        mouseenter: function(){
            $(".div").css("background","yellow")
        },
        mouseleave: function(){
            $(".div").css("background","orange")
        }
    });
});

// custom event
$(document).ready(function(){
    $(".div").bind("myEvent", function(event,name, col, colo, wid){
        $(this).css({
            background: col,
            color : colo,
            width : wid,
        }).text("my name is "+ name)
    });

    $(".btn").click(function(){
        $(".div").trigger("myEvent", ["Wael","blue", "yellow", "700"])
    });
});


/* 
========================================== 
on() = u can use it for control to the future element that has been created
========================================== 
*/

$(document).ready(function(){
    $("body").on("click", ".btn", function(){
        $("<p> this is new </p>").insertAfter($(this));
    });
    $("body").on("click", "p", function(){
        $(this).fadeOut("slow");
    })
});

/*
$(document).ready(function(){
    $("body").delegate(".btn","click", function(){
        $("<p>this is p</p>").insertAfter($(this));
    });
    $("body").delegate("p","click", function(){
        $(this).hide()
    });
});
*/

/* 
========================================== 
Event on = singel event / multi event / map event / custom event
========================================== 
*/

// singel event by on()
$(document).ready(function(){
    $("body").on("click", ".btn", function(){
        $("p").css("background", "yellow")
    })
});

// multi event by on()
$(document).ready(function(){
    $("body").on("mouseenter mouseleave", ".btn", function(){
        $("p").toggleClass("iop")
    })
});

// map event by on()
$(document).ready(function(){
    $("body").on({
        click: function(){
            $("p").css("color", "black")
        },
        dblclick: function(){
            $("p").css("background", "green")
        },
    });
});
// custom event by on()
$(document).ready(function(){
    $("body").on("myEvent", ".uio", function(e, bla, bl){
        $(this).css({
            background: bla,
            color: bl,
        });
    });
    $("body").on("click", ".btn", function(){
        $(".uio").trigger("myEvent", ["black", "blue"])
    });
});

/* 
========================================== 
preventDefault() and isDefaultPrevented() = use for stop default action
========================================== 
*/
$(document).ready(function(){
    $("a").on("click", function (e){
        e.preventDefault()
        if (e.isDefaultPrevented()){
            $(".demo").text("the link not allowed");
        } else {
            $(".demo").text("the link allowed");
        }
    });
});
/* 
========================================== 
Events = keyup / keydown / keypress
========================================== 
*/
$(function(){
    $("input").on("keyup", function(){
        $("h3").text($("input").val())
    })
    $("textarea").on("keyup", function(){
        $("p").text($("textarea").val())
    })
});

/* 
========================================== 
Event = change
========================================== 
*/
$(function(){
    $("select").on("change", function(){
        $("div").text($("select").val())

        if($("select").val() === "red"){
        $("div").css("background","red")

        } else if($("select").val() === "blue"){
            $("div").css("background","blue")

        } else if ($("select").val() === "yellow"){
            $("div").css("background","yellow")
        }
    })
})
/* 
========================================== 
Events  = focus / blur
========================================== 
*/
$(function(){
    $("input").on("keyup", function(){
        $("span").css("color","white").text("focus");
        
        if ($("input").val().length > 10){
            $("span").css("color","red").text("You Wrote than 10 numbers");
        }
    });
    $("input").on("blur", function(){
        $("span").text("Write Your number")
    });
})
/* 
========================================== 
Event = one {Note} = this event use Once only
==========================================
*/ // 
$(function(){
    $("button").one("click", function(){
        $(this).animate({
            fontSize:'+=10'
        }, "slow");
    });
});
/* 
========================================== 
Event = Select
========================================== 
*/
$(function(){
    $("button").on("click", function(){
        $("textarea").select();

           if ($("textarea").select()){
               $("span").fadeIn("slow", function(){
                   $(this).fadeOut("slow");
               });
           };
    });
});
/* 
========================================== 
Event = resize
========================================== 
*/
$(function(){
    $(window).on("resize", function(){
        var w = $(window).width();
        var h = $(window).height();
        if (w  > 1000){
            $("div").width(400)
            $("div").css("background", "green")
            $("div.size").text(w)
        } else if  (w > 800){
            $("div").width(500)
            $("div").css("background", "blue")
            $("div.size").text(w)
        } else if  (w > 600){
            $("div").width(500)
            $("div").css("background", "yellow")
            $("div.size").text(w)
        } else if  (w > 500){
            $("div").width(500)
            $("div").css("background", "red")
            $("div.size").text(w)
        } else if  (w > 400){
            $("div").width(400)
            $("div").css("background", "black")
            $("div.size").text(w)
        }
        console.log(w,h)
    })
});
/* 
========================================== 
Event = scroll / use scrollTop()
========================================== 
*/
$(function(){

    $(window).on("scroll", function(){
        var sc = $(window).scrollTop();
        console.log(sc)
        if (sc > 70){
            $(".de0, .se1").addClass("animate")
            $(".se1").addClass("animate2")
        } else {
            $(".de0").removeClass("animate")
            $(".se1").removeClass("animate2")
        }
    })
});
/* 
========================================== 
Event = pageX / pageY
========================================== 
*/
$(function(){
    $("section").one("click", function(e){
        $("input").offset({
            left: e.pageX,
            top: e.pageY
        })
    })
});
/* 
========================================== 
Event = submit
========================================== 
*/
$(function(){
    $("form").on("submit", function(e){
        if ($("input[type='text']").val().length > 10){
            $("span").text("Correct")

        } else{
            $("span").text("Wrong")
            e.preventDefault() // stop
        }
    })
});
/* 
========================================== 
Effect = delay() // for put time 
========================================== 
*/
//delay() = like stopwach
$(function(){
    $("button").on("click", function(){
        $("div").text("th is div").delay(5000).fadeOut("slow")
    })
});
/* 
========================================== 
Html = clone()
========================================== 
*/
// clone() = copy element for appendTo thing or insert
//  true = copy element with event and everything
// false or let () = cope only element

$(function(){
    $("button").on("click", function(){
        $(".lko").clone(false).appendTo("body")
    })
    $(".lko").click(function(){
        $(this).css("color", "red")
    })
});
/* 
========================================== 
Html = detach()
========================================== 
*/
/*
the deffrent between remove() && detach()
remove() = it is remove elment with event that u added to it
detach() = it is remove just element means u can add or restore the element and will append the event sicsesfully
*/
$(function(){
    var rem = $(".lp");
        $(".remove").on("click", function(){
            rem.detach();
        })
        $(".add").on("click", function(){
            $("section").prepend(rem)
        })
        $(rem).on("click",function(){
            $(this).css("color","red")
        })
});
/* 
========================================== 
Html = hasClass
========================================== 
*/
// hasClass = check if a element contains class
$(function(){
    $("li").each(function(){
        if ($(this).hasClass("active")){
            $(this).parent().parent().css("color", "red")
        }
    })
});
/* 
========================================== 
Html = Offset and position 
========================================== 
*/
// the deferent between offset and position
// offset = the size of the window completelly
// position = the size of the div or parent that contains it

$(function(){
    $(window).scroll(function(){
        var scrol = $(window).scrollTop(),
        divSc = $("div").offset().top;
    if (scrol > 1510){
        $("div").css("background", "blue")
    } else{
        $("div").css("background", "green")
    }
console.log(scrol)
    })
});
/* 
========================================== 
Html = prop
========================================== 
*/ // prop = for change atrribute
$(function(){
    $(".btn").on("click", function(){
        $(".in").prop({
            "disabled":false,
            "type": "file",
            "id":"romi",
            "value":"text"
        })
    })
});
/* 
========================================== 
Html = replaceWith
========================================== 
*/
$(function(){
    $("div").on("click", function(){
        $(this).replaceWith("<input type='text' value=' "+ $(this).text() +" '>");
        $("button").fadeIn("fast");
    })
    $("button").on("click", function(){
        $("input").replaceWith("<div>"+$("input").val() +"</div>");
        $("button").fadeOut("fast");
    })
});
/* 
========================================== 
scroolTop()
========================================== 
*/
/*

// padding && height && - margin-top || the height element that before 
the result put on offset().top

// .offset().top - the number of same for show down page
*/

$(function(){
    $(window).on("scroll", function(){
        console.log($(window).scrollTop())
        console.log(' this is offset '+ $(".hy").offset().top)
        if ($(window).scrollTop() > $(".hy").offset().top - 570) {
            $(".hy").css("background","blue")
        } else{
            $(".hy").css("background","green")
        }
    })
});

// top
$(function(){
    $(window).on("scroll", function(){
        if ($(window).scrollTop() > 400 ){
            $("a").fadeIn("slow")
        } else{
            $("a").fadeOut("slow")
        }
        $("a").on("click", function(){
            $(this).scrollTop(0)
        })
    })
});

/* 
========================================== 
wrap / unwrap // to add parent around the element
========================================== 
*/
$(function(){
    $(".add").on("click", function(){
        $("p").wrap("<div></div>")
    })
    $(".remove").on("click", function(){
        $("p").unwrap()
    })
});
/* 
========================================== 
 each / with hasClass()
========================================== 
*/
$(function(){
    $("li").each( function(){
        if ($(this).hasClass("md")){
            $(this).css({
                "color": "red",
                "background":"blue",
            })
        }
    })
});
/* 
========================================== 
has
========================================== 
*/
$(function(){
    $("p").has("span").css("color", "red")
});
/* 
========================================== 
is
========================================== 
*/
$(function(){
    if ($("p").is(":contains('u')")){
        $("span").text("Yes")
    }  else if ($("p").parent().is("div")){
        $("span").text("parent is div")
    }
});
/* 
========================================== 
end() = Finish the first event and start again
========================================== 
*/
$(function(){
    $("div")
    .find("p").css("color", "green").end()
    .css("border","1px solid red")
    .children("span").css("background","yellow")
 });
 // finish the first and start again for div

/* 
========================================== 

========================================== 
*/
