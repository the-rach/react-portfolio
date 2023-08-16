const Education = require('../models/education-model')

createEducation = (req, res) => {
    const body = req.body
    
    if (!body) {
        return res.sttus(400).json({
            success: false,
            error: 'You must provide a education'
        })
    }

    const education = new Education(body)

    if(!education) {
        return res.status(400).json({ sucess: false, error: err })
    }

    education
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: education._id,
                message: 'Education created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Education not created!'
            })
        })
}

updateEducation = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update'
        })
    }

    let foundEducation;
    try {
        foundEducation = await Education.findOne({ _id: req.params.id });
        if (foundEducation) {
            foundEducation.type = body.type;
            foundEducation.time = body.time;
            foundEducation.place = body.place;
            foundEducation.info = body.info;
            foundEducation.save(); //todo: does this neccessitate a .then() below?
            return res.status(200).json({
                success: true,
                id: foundEducation._id,
                message: 'Education updated!'
            })

        }
        else {
            return res.status(404).json({
                err,
                message: 'Education not found!'
            })
        }
    } catch(ex) {
        console.log('Error calling Education.findOne: ${ex}')
    } 
}

deleteEducation = async (req, res) => {
    let deletedEducation;
    try {
        deletedEducation = await Education.findOneAndDelete({ _id: req.params.id });
        if (!deletedEducation) {
            return res.status(404).json({ success: false, error: 'Education not found'});
        }
        return res.status(200).json({ success: true, data: deletedEducation });
    } catch(ex) {
        console.log('Error calling Education.findOneAndDelete: ${ex}');
    } 
}

getEducationById = async (req, res) => {
    let foundEducation;
    try {
        foundEducation = await Education.findOne({ _id: req.params.id });
        if (!foundEducation) {
            return res.status(404).json({ success: false, error: 'Education not found' });
        }
        return res.status(200).json({ success: true, data: foundEducation });
    } catch(ex) {
        console.log('Error calling Education.findOne: ${ex}');
    } 
}

getEducations = async (req, res) => {
    let foundEducations;
    try {
        foundEducations = await Education.find({});
        if (foundEducations) {
            return res.status(200).json({ success: true, data: foundEducations })
        }
    } catch(ex) {
        console.log('Error calling Education.find: ${ex}')
    }

}

module.exports = { 
    createEducation,
    updateEducation,
    deleteEducation,
    getEducationById,
    getEducations 
}