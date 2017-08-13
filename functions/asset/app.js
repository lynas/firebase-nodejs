(function ($) {
    console.log("test");
    $( ".mybtn" ).click(function() {
        $.ajax({
            url: "/",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                from: "dhaka",
                to: "faridpur"
            }),
            success: function (result) {
                $(".result").html(result);
            }, error: function (error) {
                console.log(error);
            }

        });
    });

    $( ".search_transport" ).click(function() {
        $.ajax({
            url: "/",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                from: "dhaka",
                to: "faridpur"
            }),
            success: function (result) {
                $(".result").html(result);
            }, error: function (error) {
                console.log(error);
            }

        });
    });
})(jQuery);