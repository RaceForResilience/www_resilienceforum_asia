$(function() {  
    var theWindow = $(window),
    $bg = $("#keyvisual"),
    aspectRatio = $bg.width() / $bg.height();
 
    function resizeKv() {
        $bg.addClass('keyvisual');
        /*
        if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
            $bg.removeClass()
               .addClass('kvheight');
        } else {
            $bg.removeClass()
               .addClass('kvwidth');
        }
        */
    }

    theWindow.resize(function() {
        resizeKv();
    }).trigger("resize");
});