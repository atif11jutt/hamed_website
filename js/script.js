jQuery(function($){
    console.log("jQuery loaded")

    $(".translate").click(function(e){
        e.preventDefault();
        var arabic = $(this).parent().find(".card-text").data("arabic");
        var eng = $(this).parent().find(".card-text").data("eng");
        if($(this).hasClass("eng")){
            $(this).parent().find(".card-text").html(arabic)
            $(this).removeClass("eng")
        }else{
            $(this).parent().find(".card-text").html(eng)
            $(this).addClass("eng")
        }
    })

    // login form
    $("#submit_login").submit(function(e){
        e.preventDefault();
        var name = $("#name").val()
        alert(name + ", Thanks for submitting!")
        $(this).trigger("reset");
    })
})