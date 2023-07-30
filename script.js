/*
    أول نسخة رسمية من مشروعي الشخصي القابل للتطوير
    من فضلك ان وجدت اي خطأ او لديك اي نصيحة لا تتردد في اخباري
    للتواصل :
    facebook: https://web.facebook.com/profile.php?id=100085585691648
*/ 
//----------------------------------------------
// call elements
var jh = document.getElementById("ljihawi");
var m1 = document.getElementById("mora9aba1");
var m2 = document.getElementById("mora9aba2");
var wt = document.getElementById("lwatani");
var calc = document.getElementById("calc");
var warn = document.getElementById("warn");
var warn1 = document.getElementById("warn1");
var warn2 = document.getElementById("warn2");
var warn3 = document.getElementById("warn3");

/*my method v1 
i will develop my own alert with nice style sheet 
*/
class App {
    MegaAlert(num) {
        if (num >= 10) {
            alert("ناجح بمعدل : " + num);
        } else {
            alert("راسب بمعدل: " + num);
        }
    }
};

// check inputs
jh.addEventListener("input", val);
m1.addEventListener("input", val);
m2.addEventListener("input", val);
wt.addEventListener("input", val);

function val(e) {
    if (e.target.value > 20) {
        this.style = "color:red"
        if (this.name == "one") {
            warn.style.visibility = "hidden"
        }
        else if (this.name == "two") {
            warn1.style.visibility = "hidden"
        }
        else if (this.name == "three") {
            warn2.style.visibility = "hidden"
        }
        else if (this.name == "four") {
            warn3.style.visibility = "hidden"
        }
    } else if (e.target.value < 0) {
        this.style = "color: red"
        if (this.name == "one") {
            warn.style.visibility = "hidden"
        }
        else if (this.name == "two") {
            warn1.style.visibility = "hidden"
        }
        else if (this.name == "three") {
            warn2.style.visibility = "hidden"
        }
        else if (this.name == "four") {
            warn3.style.visibility = "hidden"
        }
    }
    else {
        this.style = "color: var(--first-color)"

        if (this.name == "one") {
            warn.style.visibility = "visible"
        }
        else if (this.name == "two") {
            warn1.style.visibility = "visible"
        }
        else if (this.name == "three") {
            warn2.style.visibility = "visible"
        }
        else if (this.name == "four") {
            warn3.style.visibility = "visible"
        }
    }

};

// button de caculation

calc.addEventListener("click", () => {
    var j = parseInt(jh.value);
    var m = parseInt(m1.value);
    var m3 = parseInt(m2.value);
    var w = parseInt(wt.value);

    var all = (j * 0.25) + (((m + m3) / 2) * 0.25) + (w * 0.5);
    if (isNaN(all)) {
        alert("un ou plusieurs champs vides");
    }
    else {
        let ai = new App();
        ai.MegaAlert(all);
    }
});
