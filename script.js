let list1 = [];
let list2 = [];
let list3 = [];
let data = [];
let n = 1;
let x = 0;

function AddRow() {
    let name, email, num;
    //storing the values of the fields by their ids.
    name = document.getElementById("input_name").value;
    email = document.getElementById("input_email").value;
    num = document.getElementById("input_number").value;
    if (isValidate(name, email, num)) {
        //storing the values of the items in the local storage.
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("number", num);
        //creating a map of the feilds and storing it in the form of a json in the local storage.
        data[x] = {
            "name": name,
            "email": email,
            "number": num,
        }
        localStorage.setItem('infodetails', JSON.stringify(data));






        let AddRown = document.getElementById('show');
        let NewRow = AddRown.insertRow(n);
        //creating a double dimensional array to store the table values
        list1[x] = localStorage.getItem("name");
        list2[x] = localStorage.getItem("email");
        list3[x] = localStorage.getItem("number");

        let cel1 = NewRow.insertCell(0);
        let cel2 = NewRow.insertCell(1);
        let cel3 = NewRow.insertCell(2);
        let cel4 = NewRow.insertCell(3);
        cel1.innerHTML = n;
        cel2.innerHTML = list1[x];
        cel3.innerHTML = list2[x];
        cel4.innerHTML = list3[x];
        n++;
        x++;
        // reset the values of the form afte the clicking the button.
        document.getElementById("main_form").reset()

    }
}




function isValidate(name, email, num) {


    return isValidName(name) && (isValidEmail(email) && isValidMobile(num));
}

function isValidName(name) {
    let nameRegex = /^[a-zA-Z ]*$/;
    if (name === "") {
        alert("Please Enter Your Name");
        return false
    }
    else if (nameRegex.test(name)) {
        return true;
    }
    else {
        alert("Sorry! Name is not valid")
        return false;
    }

}
function isValidEmail(email) {
    let emailRegex = /^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/;
    if (email === "") {
        alert("Please Enter Email");
        return false;
    }
    else if (emailRegex.test(email)) {
        return true;
    }
    else {
        alert("Sorry! Email is not valid")
        return false;
    }

}
function isValidMobile(num) {
    let mobileRegex = /^\d{10}$/;
    if (num === "") {
        alert("Please Enter Mobile Number");
        return false
    }
    else if (mobileRegex.test(num)) {
        return true;
    }
    else {
        alert("Sorry! Mobile Number is not valid")
        return false;
    }

}