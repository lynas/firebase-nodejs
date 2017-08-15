(function ($) {
    console.log("test");
    var counter = 1;
    $(".mybtn").click(function () {
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

    $(".search_transport").click(function () {
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

    $(".add_new_route_form").submit(function (event) {
        event.preventDefault();


        const data = $('.add_new_route_form').serializeArray()
            .reduce(function (a, x) {
                a[x.name] = x.value;
                return a;
            }, {});
        // for(var i=1;i<=counter;i++) {
        //     const ss = "bus_type_" + i;
        //     console.log(data[ss]);
        // }
        var input_json = {
            bus_name: data["bus_name"],
            counter: data["counter"],
            from: data["from"],
            to: data["to"],
            contact_number: data["contact_number"],
            booking_number: data["booking_number"],
            economy_fare: data["economy_fare"]
        };

        var bus_types = [];
        bus_types.push({
            type_name: "economy",
            ticket_cost: data["economy_fare"]
        });
        if (data["ac_fare"] !== "") {
            bus_types.push({
                type_name: "ac",
                ticket_cost: data["ac_fare"]
            });
        }
        if (data["business_fare"] !== "") {
            bus_types.push({
                type_name: "business",
                ticket_cost: data["business_fare"]
            });
        }
        input_json.bus_types = bus_types;

        console.log(JSON.stringify(data));
        console.log(JSON.stringify(input_json));
        return false;
    });

    $(".add_bus_schedule").click(function (event) {
        event.preventDefault();
        counter++;
        $(".bus_schedule").append('<br />' +
            '<select name="option_bus_schedule_day_' + counter + '"><option>Everyday</option><option>Saturday</option><option>Sunday</option><option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option></select>' +
            '<select name="option_bus_schedule_' + counter + '"><option>economy</option><option>ac</option><option>business</option></select>' +
            '<span style="margin-left:10px; margin-right:10px;"><input name="bus_schedule_' + counter + '"></span>' +
            '<select name="option_time_bus_schedule_' + counter + '"><option>am</option><option>pm</option></select>');
    });
})(jQuery);