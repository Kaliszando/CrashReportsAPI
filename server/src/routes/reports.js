const express = require('express');
const router = express.Router();
const Report = require('../models/Report');

// GET all id
router.get('/', async (req, res) => {
    try{
        const reports = await Report.find({}, { _id: true });
        res.json(reports);
    }  catch(err) {
        res.json({ message: err })
    }
});

// GET one by report number
router.get('/:reportId', async (req, res) => {
    try{
        const report = await Report.find({ _id: req.params.reportId });
        res.json(report);
    } catch(err) {
        res.json({ message: err});
    }
})

// POST
router.post('/', async (req, res) => {
    const report = new Report({
        report_number: req.body.report_number,
        agency_name: req.body.agency_name,
        report_type: req.body.report_type,
        crash_date: req.body.crash_date,
        route_type: req.body.route_type,
        road_name: req.body.road_name,
        cross_street_name: req.body.cross_street_name,
        cross_street_type: req.body.cross_street_type,
        related_non_motorist: req.body.related_non_motorist,
        at_fault: req.body.at_fault,
        collision_type: req.body.collision_type,
        weather: req.body.weather,
        surface_condition: req.body.surface_condition,
        light: req.body.light,
        traffic_control: req.body.traffic_control,
        driver_substance_abuse: req.body.driver_substance_abuse,
        non_motorist_substance_abuse: req.body.non_motorist_substance_abuse,
        first_harmful_event: req.body.first_harmful_event,
        second_harmful_event: req.body.second_harmful_event,
        junction: req.body.junction,
        intersection_type: req.body.intersection_type,
        road_alignment: req.body.road_alignment,
        road_condition: req.body.road_condition,
        road_division: req.road_division,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });

    try {
        const savedReport = await report.save();
        res.json(savedReport);
    } catch(err) {
        res.json({ message: err });
    }
});

// DELETE
router.delete('/:reportId', async (req, res) => {
    try {
        const removedReport = await Report.remove({ _id: req.params.reportId });
        res.json(removedReport);
    } catch(err) {
        res.json({ message: err });
    }

})

// PUT
router.put('/:reportId', async (req, res) => {
    try{
        const updatedReport = await Report.update(
            { _id: req.params.reportId },
            req.body 
        );
        res.json(updatedReport);
    } catch(err) {
        res.json({ message: err });
    }
})

module.exports = router;