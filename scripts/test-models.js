
const mongoose = require('mongoose');

// Mock Mongoose connection to avoid actual DB connection errors during compilation
mongoose.connect = async () => console.log('Mock connected');

async function testModels() {
    try {
        console.log('Testing User model...');
        require('../src/models/user');
        console.log('User model compiled.');

        console.log('Testing Departments model...');
        require('../src/models/departments');
        console.log('Departments model compiled.');

        console.log('Testing Doctors model...');
        require('../src/models/doctors');
        console.log('Doctors model compiled.');

        console.log('Testing Schedule model...');
        require('../src/models/schedule');
        console.log('Schedule model compiled.');

        console.log('Testing Patients model...');
        require('../src/models/patients');
        console.log('Patients model compiled.');

        console.log('All models compiled successfully.');
    } catch (error) {
        console.error('Error compiling models:', error);
        process.exit(1);
    }
}

testModels();
