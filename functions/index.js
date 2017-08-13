const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const app = express();
const firebaseApp = firebase.initializeApp(functions.config().firebase);
app.set('view engine', 'pug');
app.use('/asset', express.static(__dirname + '/asset'));

app.get('/', function (req, res) {
    res.render('index', {title: "jogajog"});
});

app.post('/', function (req, res) {
    res.render('search_card', {
        title: "jogajog", data: [
            {
                bus_name: "Ajmiri Enterprise",
                counter: "Gabtoli",
                route: "Dhaka to Faridpur",
                contact: "964412542",
                booking: "",
                bus_types: [
                    {
                        type_name: "economy",
                        ticket_cost: 350
                    },
                    {
                        type_name: "ac",
                        ticket_cost: 450
                    },
                    {
                        type_name: "business",
                        ticket_cost: 550
                    }
                ],
                bus_schedules: [
                    {
                        days: "everyday",
                        times: [
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "10am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "11am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "12am",
                                bus_type: "ac"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "ac"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "business"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "ac"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "ac"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "business"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            }
                        ]
                    },
                    {
                        days: "Sunday",
                        times: [
                            {
                                schedule_time: "9am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "10am",
                                bus_type: "economy"
                            },
                            {
                                schedule_time: "11am",
                                bus_type: "economy"
                            }

                        ]
                    }
                ]
            }
        ]
    });
});

exports.app = functions.https.onRequest(app);

