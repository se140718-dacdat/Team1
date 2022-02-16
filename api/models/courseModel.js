const mongoose = require('mongoose');

const courseSchema = {
    id: String,
    toolListName: String,
    toolDescriptor: String,
    toolList: [{
        id: String,
        toolImg: String,
        toolIcon: String,
        toolName: String,
        toolCode: String,
        toolDescriptor: String,
        toolLink: String
    }]
}

const Course = mongoose.model("courses", courseSchema);

module.exports = Course;