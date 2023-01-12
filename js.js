window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop &gt; 20 || document.documentElement.scrollTop &gt; 20) {
        document.getElementById(&quot;myBtn&quot;).style.display = &quot;block&quot;;
    } else {
        document.getElementById(&quot;myBtn&quot;).style.display = &quot;none&quot;;
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
                  $('#tab .widget1').hide();
                  $('#tab .widget1:first').show();
                  $('.tab-widget-menu ul li:first').addClass('selected');
                  $('.tab-widget-menu ul li').click(function(){ 
                    $('.tab-widget-menu ul li').removeClass('selected');
                    $(this).addClass('selected');
                    $('#tab .widget1').hide();
                    $('#tab .widget1').eq($('.tab-widget-menu ul li').index(this)).slideDown()(500);
                  });
                });

