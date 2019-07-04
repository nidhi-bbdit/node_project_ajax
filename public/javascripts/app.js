$(function(){
    $("#submit").on('click', function(event){
        event.preventDefault();
        var name   = $('#name').val();
        var email      = $("#email").val();
        var password   = $("#password").val();
        if(!name || !email || !password){ 
           console.log('All fields are required');
        } 
        else{ 
            $.ajax({
                url: "/registration",
                method: "POST",
                data: { name: name, email: email, password: password},
                success: function(data) {
                console.log(data.message);
                console.log('process sucess');
               
               },

                error: function(errors) {
                  console.log('process error');
                  console.log(data.errors);

                },
            });    
           
        }
    });
});
