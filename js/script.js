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


    // Form validation
    if (yob === ""){
        window.alert("Enter your year of birth.");
        yob.focus()
        return false;
    }
    else if (month === ""){
        window.alert("Enter your month of birth.");
        month.focus()
        return false;
    }
    else if (dob === ""){
        window.alert("Enter your date of birth.");
        dob.focus()
        return false;
    }
    else if (gender == "select-gender"){
        window.alert("Select your gender.");
        gender.focus();
        return false;
    }
    else {
      // Akan name generator results
      if (gender === "male"){
          var dNone = document.getElementById('akanForm');
          dNone.style.display = "none";
          let name = maleNames[birthDate];
          let test = document.getElementById('test');
          test.textContent = `You were born on ${dateStr}. Your Akan Name is ${name}.`;
          test.style.backgroundColor = "#ddd";
          test.style.fontSize = "1rem";
          // test.style.border = "2px solid black";
          test.style.margin = '10%';
          test.style.padding = '5%';

          test.appendChild(document.createElement("br"));

          // Adding go back button
          var button = document.createElement("button");
          button.innerText = 'Go Back';
          button.style.backgroundColor = 'blue';
          button.style.color = '#fff';
          button.style.margin = '5%';
          button.style.padding = '10px 3%';
          button.style.border = "none";

          // Append in test div
          // var body = document.getElementById("test");
          test.appendChild(button);

          // Add event handler
          button.addEventListener ("click", function() {
          // alert("did something");
          window.location='index.html';
              
          });
    }

           // Akan name generator results
      if (gender === "male"){
        var dNone = document.getElementById('akanForm');
        dNone.style.display = "none";
        let name = maleNames[birthDate];
        let test = document.getElementById('test');
        test.textContent = `You were born on ${dateStr}. Your Akan Name is ${name}.`;
        test.style.backgroundColor = "#ddd";
        test.style.fontSize = "1rem";
        // test.style.border = "2px solid black";
        test.style.margin = '10%';
        test.style.padding = '5%';

        test.appendChild(document.createElement("br"));

        // Adding go back button
        var button = document.createElement("button");
        button.innerText = 'Go Back';
        button.style.backgroundColor = 'blue';
        button.style.color = '#fff';
        button.style.margin = '5%';
        button.style.padding = '10px 3%';
        button.style.border = "none";

        // Append in test div
        // var body = document.getElementById("test");
        test.appendChild(button);

        // Add event handler
        button.addEventListener ("click", function() {
        // alert("did something");
        window.location='index.html';
            
        });


      }

});