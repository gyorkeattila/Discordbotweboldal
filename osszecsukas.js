$(gyik.html).ready(function(){
    $('.accordionn input[type="checkbox"]').on('change', function(){
        $('.accordionn input[type="checkbox"]').not(this).prop('checked', false);
    });
});
