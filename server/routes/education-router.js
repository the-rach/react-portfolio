const express = require('express')

const EducationCtrl = require('../controllers/education-ctrl')

const router = express.Router()

router.post('/education', EducationCtrl.createEducation)
router.put('/education/:id', EducationCtrl.updateEducation)
router.delete('/education/:id', EducationCtrl.deleteEducation)
router.get('/education/:id', EducationCtrl.getEducationById)
router.get('/educations', EducationCtrl.getEducations)

module.exports = router