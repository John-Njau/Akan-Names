// Array to hold the Akan names.
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw','Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']


// submit function
document.querySelector('#submit').addEventListener('click', ()=>{
    // var name;
    var yob = document.forms['akanForm']['yob'].value;
    var month = document.forms['akanForm']['month'].value;
    var dob = document.forms['akanForm']['dob'].value;
    var gender = document.getElementById('gender').value;

    // let birthDay = new Date(year, month, day);
    // let birthDay = new Date(`${yob}-${month}-${dob}`);
    let birthDay = new Date (`${yob}/${month}/${dob}`);
    // var birthDay = new Date('year' + '-' + 'month' + '-' +'date')
    let dateStr = birthDay.toDateString();
    let birthDate = birthDay.getDay();
});