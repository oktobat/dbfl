(function($){

    $('#onBox').load('main.html')
    $('.topmenu > h1 > a').on('click',function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#onContainer').remove()
        $('#onBox').load(url)
    })



})(jQuery)