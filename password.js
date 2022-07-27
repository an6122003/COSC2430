function verify() {
    let p1 = document.querySelector("#password").value;
    let p2 = document.querySelector("#retype_password").value;
    let res = document.querySelector("#verification_status");

    // if (p1 == p2) {
    //     res.innerText = "Success";
    //     res.classList.add("status-success");
    //     res.classList.remove("status-error");
    // } else {
    //     res.innerText = "Wrong password";
    //     res.classList.add("status-error");
    //     res.classList.remove("status-success");
    // }

    // if (p1.length >= 8 && p1.length <= 20) {

    // } else {
    //     alert("Password must be between 8 and 20 characters.")
    // }

    //Check if password contain at least 1 Uppercase Character
    let uppercase = false;
    for (let i = 0; i < p1.length; i ++) {
        let c = charAt(i);
        if ('A' >= c && c <= 'z'){
            break;
        }
    }

    if (uppercase == 'true') {
        res.innerText = "Success, there is at least 1 upper case";
        res.classList.add("status-success");
        res.classList.remove("status-error");
    } else {
        res.innerText = "Password need at least 1 upper case";
        res.classList.add("status-error");
        res.classList.remove("status-success");
    }
}