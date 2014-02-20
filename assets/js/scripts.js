var photo = Math.round(Math.random() * 8);
var name = "assets/img/" + photo + ".jpg";
document.getElementById("top").style.background = "url('" + name + "')";

document.createElement('li');
document.createElement('figcaption');

$(window).load(function(){
    $(document).ready(function(){

        $(document).scroll(function() {

            var top = $(document).scrollTop();

            if (top > 542 && window.innerWidth > 800) {
                $('#wrapper-about').css({'position': 'fixed', 'top': '0', 'background-color': 'white'});
                $('#wrapper-projects').css({'position': 'relative', 'top': '510px'});
            }
            else {
              $('#wrapper-about').css({'position': 'relative'});
              $('#wrapper-projects').css({'position': 'relative', 'top': '0px'});
            }
            
            return false;
        });
    });
});