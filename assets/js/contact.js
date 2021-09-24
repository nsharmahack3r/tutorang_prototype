const nameEditText = document.getElementById('name');
const emailEditText = document.getElementById('email');
const telEditText = document.getElementById('tel');
const submitButton = document.getElementById('submit');

const getFormData = ()=>{
   const data = {
        name:nameEditText.value,
        email:emailEditText.value,
        tel:telEditText.value
    }
    console.log(data);
}

submitButton.addEventListener('click',()=>{
    getFormData();
});