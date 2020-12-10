const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema({
    report_number: {
        type: String,
        required: true
    },
    agency_name: {
        type: String,
        required: true
    },
    report_type: {
        type: String,
        required: true
    },
    crash_date: {
        type: Date,
        required: true
    },
    route_type: String,
    road_name: String,
    cross_street_name: String,
    cross_street_type: String,
    related_non_motorist: String,
    at_fault: {
        type: String,
        required: true
    },
    collision_type: {
        type: String,
        required: true
    },
    weather: String,
    surface_condition: String,
    light: String,
    traffic_control: String,
    driver_substance_abuse: String,
    non_motorist_substance_abuse: String,
    first_harmful_event: String,
    second_harmful_event: String,
    junction: String,
    intersection_type: String,
    road_alignment: String,
    road_condition: String,
    road_division: String,
    latitude: Number,
    longitude: Number
})

module.exports = mongoose.model('Report', ReportSchema)