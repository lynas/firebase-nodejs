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
        var every_day_time = [];
        var saturday_day_time = [];
        var sunday_day_time = [];
        var monday_day_time = [];
        var tuesday_day_time = [];
        var wednesday_day_time = [];
        var thursday_day_time = [];
        var friday_day_time = [];

        for (var i = 1; i <= counter; i++) {
            const schedule_day = "option_schedule_day_" + i;
            const bus_type = "option_bus_type_" + i;
            const bus_schedule = "bus_schedule_" + i;
            const schedule_meridiem = "option_meridiem_" + i;
            console.log(data[schedule_day]);
            console.log(data[bus_type]);
            console.log(data[bus_schedule]);
            console.log(data[schedule_meridiem]);

            if (data[schedule_day] == "everyday") {
                every_day_time.push({
                    schedule_time: data[bus_schedule] + data[schedule_meridiem],
                    bus_type: data[bus_type]
                });
            } else if (data[schedule_day] == "saturday") {
                saturday_day_time.push({
                    schedule_time: data[bus_schedule] + data[schedule_meridiem],
                    bus_type: data[bus_type]
                });
            } else if (data[schedule_day] == "sunday") {
                sunday_day_time.push({
                    schedule_time: data[bus_schedule] + data[schedule_meridiem],
                    bus_type: data[bus_type]
                });
            } else if (data[schedule_day] == "monday") {
                monday_day_time.push({
                    schedule_time: data[bus_schedule] + data[schedule_meridiem],
                    bus_type: data[bus_type]
                });
            } else if (data[schedule_day] == "tuesday") {
                tuesday_day_time.push({
                    schedule_time: data[bus_schedule] + data[schedule_meridiem],
                    bus_type: data[bus_type]
                });
            } else if (data[schedule_day] == "wednesday") {
                wednesday_day_time.push({
                    schedule_time: data[bus_schedule] + data[schedule_meridiem],
                    bus_type: data[bus_type]
                });
            } else if (data[schedule_day] == "thursday") {
                thursday_day_time.push({
                    schedule_time: data[bus_schedule] + data[schedule_meridiem],
                    bus_type: data[bus_type]
                });
            } else if (data[schedule_day] == "friday") {
                friday_day_time.push({
                    schedule_time: data[bus_schedule] + data[schedule_meridiem],
                    bus_type: data[bus_type]
                });
            }


        }
        var bus_schedules = [];
        if (every_day_time.length !== 0) {
            bus_schedules.push(
                {
                    days : "everyday",
                    times : every_day_time
                }
            );
        }
        if (saturday_day_time.length !== 0) {
            bus_schedules.push(
                {
                    days : "saturday",
                    times : saturday_day_time
                }
            );
        }
        if (sunday_day_time.length !== 0) {
            bus_schedules.push(
                {
                    days : "sunday",
                    times : sunday_day_time
                }
            );
        }
        if (monday_day_time.length !== 0) {
            bus_schedules.push(
                {
                    days : "monday",
                    times : monday_day_time
                }
            );
        }
        if (tuesday_day_time.length !== 0) {
            bus_schedules.push(
                {
                    days : "tuesday",
                    times : tuesday_day_time
                }
            );
        }
        if (thursday_day_time.length !== 0) {
            bus_schedules.push(
                {
                    days : "thursday",
                    times : thursday_day_time
                }
            );
        }
        if (friday_day_time.length !== 0) {
            bus_schedules.push(
                {
                    days : "friday",
                    times : friday_day_time
                }
            );
        }
        input_json.bus_schedules  = bus_schedules;
        // console.log(JSON.stringify(data));
        console.log("--------OUT--------")
        console.log(JSON.stringify(input_json));
        console.log("--------OUTEND--------")
        return false;
    });

    $(".add_bus_schedule").click(function (event) {
        event.preventDefault();
        counter++;
        $(".bus_schedule").append('<br />' +
            '<select name="option_schedule_day_' + counter + '"><option>everyday</option><option>saturday</option><option>sunday</option><option>monday</option><option>tuesday</option><option>wednesday</option><option>thursday</option><option>friday</option></select>' +
            '<select name="option_bus_type_' + counter + '"><option>economy</option><option>ac</option><option>business</option></select>' +
            '<span style="margin-left:10px; margin-right:10px;"><input name="bus_schedule_' + counter + '"></span>' +
            '<select name="option_meridiem_' + counter + '"><option>am</option><option>pm</option></select>');
    });
})(jQuery);