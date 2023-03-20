
console.log("Assignment 5 loaded.");

// a function declaration inside of a callback ... which takes a callback function :O
function ajaxGET(url, callback) {

    const xhr = new XMLHttpRequest();

    // knock knock
    let value = null;

    //console.log("xhr", xhr);
    xhr.onload = function () {
        value = this.responseText;
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            //console.log('responseText:' + xhr.responseText);

            // callback function
            value = this.responseText;
            callback(this.responseText);

        } else {
            console.log(this.status);
        }
    }
    xhr.open("GET", url);
    xhr.send();
    // who's there?
    console.log("value", value);

}



let isDisplayed = false; // track whether the table is already displayed

document.querySelector("#course").addEventListener("click", function (e) {
    const requirementDataEl = document.getElementById("course-data");
    const buttons = document.querySelectorAll('.ajax_content.button');
    
    if (isDisplayed) {
        requirementDataEl.innerHTML = "";
        requirementDataEl.classList.remove("full-width");

        buttons.forEach(function(el) {
            if (el.querySelector('input') !== e.target) {
                el.style.display = 'inline-block';
                el.style.width = '25%'; // set original width
            } else {
                el.style.display = 'inline-block';
                el.style.width = '25%'; // set full-width
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/course", function (data) {
            let parsedData = JSON.parse(data);
            let str = "<table>";
        
            for (let i = 0; i < parsedData.length; i++) {
                let item = parsedData[i];
        
                // Add label for first item only
                if (i === 0) {
                    str += "<tr><th>Title</th><th>Code</th><th>Credit</th><th>Instructor</th><th>Description</th></tr>";
                }
        
                str += "<tr><td>" + item["title"] + "</td><td>" + item["code"] + "</td><td>" + item["credit"] +
                    "</td><td>" + item["instructor"] +"</td><td>" + item["description"] + "</td></tr><tr>";
            }
        
            str += "</table>";
            requirementDataEl.innerHTML = str;
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; // set full-width
                }
            });
        
            isDisplayed = true;
        });
        
    }
});

document.querySelector("#faculty").addEventListener("click", function (e) {
    const requirementDataEl = document.getElementById("faculty-data");
    const buttons = document.querySelectorAll('.ajax_content.button');
    
    if (isDisplayed) {
        requirementDataEl.innerHTML = "";
        requirementDataEl.classList.remove("full-width");

        buttons.forEach(function(el) {
            if (el.querySelector('input') !== e.target) {
                el.style.display = 'inline-block';
                el.style.width = '25%'; // set original width
            } else {
                el.style.display = 'inline-block';
                el.style.width = '25%'; // set full-width
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/faculty", function (data) {
            let parsedData = JSON.parse(data);
            let str = "<table>";
        
            for (let i = 0; i < parsedData.length; i++) {
                let item = parsedData[i];
        
                // Add label for first item only
                if (i === 0) {
                    str += "<tr><th>Name</th><th>Title</th><th>";
                }
        
                str += "<tr><td>" + item["name"] + "</td><td>" + item["title"] + "</td></tr><tr>";
            }
        
            str += "</table>";
            requirementDataEl.innerHTML = str;
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; // set full-width
                }
            });
        
            isDisplayed = true;
        });
        
    }
});

document.querySelector("#requirement").addEventListener("click", function (e) {
    const requirementDataEl = document.getElementById("requirement-data");
    const buttons = document.querySelectorAll('.ajax_content.button');
    
    if (isDisplayed) {
        requirementDataEl.innerHTML = "";
        requirementDataEl.classList.remove("full-width");

        buttons.forEach(function(el) {
            if (el.querySelector('input') !== e.target) {
                el.style.display = 'inline-block';
                el.style.width = '25%'; // set original width
            } else {
                el.style.display = 'inline-block';
                el.style.width = '25%'; // set full-width
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/requirement", function (data) {
            let parsedData = JSON.parse(data);
            let str = "<table>";
        
            for (let i = 0; i < parsedData.length; i++) {
                let item = parsedData[i];
        
                // Add label for first item only
                if (i === 0) {
                    str += "<tr><th>Requirements</th><th>Description</th><th>";
                }
        
                str += "<tr><td>" + item["title"] + 
                 "</td><td>" + item["description"] + "</td></tr><tr>";
            }
        
            str += "</table>";
            requirementDataEl.innerHTML = str;
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; // set full-width
                }
            });
        
            isDisplayed = true;
        });
        
    }
});

document.querySelector("#cost").addEventListener("click", function (e) {
    const requirementDataEl = document.getElementById("cost-data");
    const buttons = document.querySelectorAll('.ajax_content.button');
    
    if (isDisplayed) {
        requirementDataEl.innerHTML = "";
        requirementDataEl.classList.remove("full-width");

        buttons.forEach(function(el) {
            if (el.querySelector('input') !== e.target) {
                el.style.display = 'inline-block';
                el.style.width = '25%'; // set original width
            } else {
                el.style.display = 'inline-block';
                el.style.width = '25%'; // set full-width
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/cost", function (data) {
            let parsedData = JSON.parse(data);
            let str = "<table>";
        
            for (let i = 0; i < parsedData.length; i++) {
                let item = parsedData[i];
        
                // Add label for first item only
                if (i === 0) {
                    str += "<tr><th>Fees</th><th>Costs</th><th>";
                }
        
                str += "<tr><td>" + item["title"] + 
                 "</td><td>" + item["cost"] + "</td></tr><tr>";
            }
        
            str += "</table>";
            requirementDataEl.innerHTML = str;
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; // set full-width
                }
            });
        
            isDisplayed = true;
        });
        
    }
});