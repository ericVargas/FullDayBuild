console.log('form working');

$(".delete").on('click', function() {
    let id = $(this).parent().attr('data-id');
    axios.delete("http://localhost:3000/"+id);
    $(this).parent().remove();
});

$(".edit").on('click', function() {
    $(this).prev().removeAttr('read-only');
    $(this).prev().focus();
});

$('.input_item').on('change', function(){
    let id = parseInt($(this).parent().attr('data-id'));
    let val = $(this).val(); console.log(val);
    axios.patch("http://localhost:3000/"+id), {
        first: val,
        id: id
    }
})