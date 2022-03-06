
// Array to hold the Akan names.
var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

// submit function
document.querySelector('#submit').addEventListener('click', () => {

    var yob = document.forms['akanForm']['yob'].value;
    var month = document.forms['akanForm']['month'].value;
    var dob = document.forms['akanForm']['dob'].value;
    var gender = document.getElementById('gender').value;

    // let birthDay = new Date(year, month, day);
    // let birthDay = new Date(`${yob}-${month}-${dob}`);
    let birthDay = new Date(`${yob}/${month}/${dob}`);
    // var birthDay = new Date('year' + '-' + 'month' + '-' +'date')
    let dateStr = birthDay.toDateString();
    let birthDate = birthDay.getDay();


    // Form validation
    if (yob === "") {
        window.alert("Enter your year of birth.");
        yob.focus()
        return false;
    }
    else if (month === "") {
        window.alert("Enter your month of birth.");
        month.focus()
        return false;
    }
    else if (dob === "") {
        window.alert("Enter your date of birth.");
        dob.focus()
        return false;
    }
    else if (gender == "select-gender") {
        window.alert("Select your gender.");
        gender.focus();
        return false;
    }
    else {
        // Akan name generator results
        if (gender === "male") {
            var dNone = document.getElementById('akanForm');
            dNone.style.display = "none";
            document.getElementById('back-btn').style.display = "none";
            let name = maleNames[birthDate];
            let result = document.getElementById('result');
            result.textContent = `You were born on ${dateStr}. Your Akan Name is ${name}.`;
            // result.style.backgroundColor = "#ddd";
            // result.style.fontSize = "1rem";
            // result.style.border = "2px solid black";
            // result.style.margin = '7%';
            result.style.padding = '5%';
            // result.style.opacity = "0.5";

            result.appendChild(document.createElement("br"));

            // Adding go back button
            var button = document.createElement("button");
            button.innerText = 'Go Back';
            button.style.backgroundColor = 'blue';
            button.style.color = '#fff';
            button.style.margin = '5%';
            button.style.padding = '10px 3%';
            button.style.border = "none";

            // Append in result div
            // var body = document.getElementById("result");
            result.appendChild(button);

            // Add event handler
            button.addEventListener("click", function () {
                // alert("did something");
                window.location = 'akanPage.html';

            });
        }

        // Akan name generator results
        if (gender === "female") {
            var dNone = document.getElementById('akanForm');
            dNone.style.display = "none";
            document.getElementById('back-btn').style.display = "none";
            let name = femaleNames[birthDate];
            let result = document.getElementById('result');
            result.textContent = `You were born on ${dateStr}. Your Akan Name is ${name}.`;
            // result.style.backgroundColor = "#ddd";
            // result.style.fontSize = "1rem";
            // result.style.border = "2px solid black";
            // result.style.margin = '7%';
            // result.style.padding = '5%';

            result.appendChild(document.createElement("br"));

            // Adding go back button
            var button = document.createElement("button");
            button.innerText = 'Go Back';
            button.style.backgroundColor = 'blue';
            button.style.color = '#fff';
            button.style.margin = '5%';
            button.style.padding = '10px 3%';
            button.style.border = "none";

            // Append in result div
            // var body = document.getElementById("result");
            result.appendChild(button);

            // Add event handler
            button.addEventListener("click", function () {
                // alert("did something");
                window.location = 'akanPage.html';

            });
        }
    }
});


// Reset form function
// document.querySelector('#reset').addEventListener('click', () =>{
//     let resetForm = document.getElementById('akanForm');
//     resetForm.reset();
// });

// jquery user input validation
$(function () {
    $("#year").change(function () {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));
        if ($(this).val() > max) {

            window.alert('Year is Invalid, check again')
            $(this).val(max);
        }
        else if ($(this).val() < min) {
            //    $(this).val(min);
            window.alert('Year is Invalid, check again');
            $(this).val(min);
        }
    });
});

$(function () {
    $("#month").change(function () {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));
        if ($(this).val() > max) {

            window.alert('Month is Invalid, check again')
            $(this).val(max);

        }
        else if ($(this).val() < min) {
            //    $(this).val(min);
            window.alert('Month is Invalid, check again')
            $(this).val(min);
        }
    });
});


$(function () {
    $("#date").change(function () {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));
        if ($(this).val() > max) {
            //    $(this).val(max);
            window.alert('Date is Invalid, check again')
            $(this).val(max);
        }
        else if ($(this).val() < min) {
            //    $(this).val(min);
            window.alert('Date is Invalid, check again')
            $(this).val(min);
        }
    });
});

