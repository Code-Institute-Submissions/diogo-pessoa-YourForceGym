$(function() {
    $('.image-thumb-expand').on('click', function() {
        console.log($(this).attr('src'))
        $('.imagepreview').attr('src', $(this).attr('src'));
        $('#imagemodal').modal('show');   
    });		
});