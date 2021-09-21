//Grabbing all the views for operations

const subjectSelectListView = document.getElementById("subjects-select");
const gradeSelectListView = document.getElementById("grade-select");

const datePickerView = document.getElementById("session-date");
const startTimeView = document.getElementById("start-time");
const endTimeView = document.getElementById("end-time");

//Form Components
//These will be initialized once the page is loaded successfully.

let gradePicker;
let subjectPicker;

let sessionDatePicker;
let sessionStartTimePicker;
let sessionEndTimePicker;

// These are simple text input fields so they don't need to be initialized

const nameEditText = document.getElementById('name');
const telEditText = document.getElementById('tel');
const emailEditText = document.getElementById('email');


// To Add more subjects, just drop them in the list below

const subjects = ["Maths", "Physics", "Chemistry", "Calculas 1", "English"];



document.addEventListener('DOMContentLoaded', function() {

    const options = {};

    //Adding grades to the grades picker
    for(let i = 1;i<13;i++){
        gradeSelectListView.innerHTML = gradeSelectListView.innerHTML+"<option value='"+i+"'>"+i+"</option>";
    }

    //Adding Subjects to the Subject Picker
    var i = 0;
    subjects.forEach(subject=>{
        ++i;
        subjectSelectListView.innerHTML = subjectSelectListView.innerHTML+"<option value='"+i+"'>"+subject+"</option>";
    });

    //Initializing Form Components

    subjectPicker = M.FormSelect.init(subjectSelectListView, options);
    gradePicker = M.FormSelect.init(gradeSelectListView, options);

    
    sessionDatePicker = M.Datepicker.init(datePickerView, options);
    sessionStartTimePicker = M.Timepicker.init(startTimeView, options);
    sessionEndTimePicker = M.Timepicker.init(endTimeView, options);

  });

  //This functon will return all the data in the form of a javascript object

const getFormData = ()=>{

    const options = {};

    // These Statements are required to get the current value that the picker holds.
    gradePicker = M.FormSelect.init(gradeSelectListView, options);
    subjectPicker = M.FormSelect.init(subjectSelectListView, options);


    var grade = gradePicker.getSelectedValues()[0];
    var subject =subjectPicker.getSelectedValues()[0];
    const formData = {
       subject:subject,
       grade:grade,
       date:sessionDatePicker.date,
       sessionStartTime:sessionStartTimePicker.time,
       sessionEndTime:sessionEndTimePicker.time,
       name:nameEditText.value,
       email:emailEditText.value,
       tel:telEditText.value
    }
    return formData;
}