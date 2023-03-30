
// invoke ready and pass in a callback function
ready(function () {

    console.log("Assignment6 is loaded.");

    // a function declaration inside of a callback ... which takes a callback function :O
    function ajaxGET(url, callback) {

        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                callback(this.responseText);

            } else {
            }
        }
        xhr.open("GET", url);
        xhr.send();
    }

let isDisplayed = false; // track whether the table is already displayed

document.querySelector("#courseHTML").addEventListener("click", function (e) {
    const requirementDataEl = document.getElementById("course-html");
    const buttons = document.querySelectorAll('.ajax_content.button');
    
    if (isDisplayed) {
        requirementDataEl.innerHTML = "";
        requirementDataEl.classList.remove("full-width");

        buttons.forEach(function(el) {
            if (el.querySelector('input') !== e.target) {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            } else {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/course?format=html", function (data) {
            console.log(data);
            // since it's HTML, let's drop it right in
            document.getElementById("course-html").innerHTML = data;
    
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; 
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
                el.style.width = '16.666666%';
            } else {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/faculty", function (data) {
            // console.log(data); //Shows JSON format
            let parsedData = JSON.parse(data);
            let str = "<table>";
        
            for (let i = 0; i < parsedData.length; i++) {
                let item = parsedData[i];
        
                // Add label for first item only
                if (i === 0) {
                    str += "<tr><th>Name</th><th>Title</th><th>Course</th><th>Course</th><th>Course</th><th>";
                }
        
                str += "<tr><td>" + item["name"] + "</td><td>" + item["title"] +
                "</td><td>" + item["course1"] +
                "</td><td>" + item["course2"] +
                "</td><td>" + item["course3"] + "</td></tr><tr>";
            }
        
            str += "</table>";
            requirementDataEl.innerHTML = str;
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; 
                }
            });
        
            isDisplayed = true;
        });
        
    }
});

document.querySelector("#user-table").addEventListener("click", function (e) {
    const requirementDataEl = document.getElementById("user-table-data");
    const buttons = document.querySelectorAll('.ajax_content.button');
    
    if (isDisplayed) {
        requirementDataEl.innerHTML = "";
        requirementDataEl.classList.remove("full-width");

        buttons.forEach(function(el) {
            if (el.querySelector('input') !== e.target) {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%';
            } else {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/user_table", function (data) {
            let str = data;
        
            requirementDataEl.innerHTML = str;
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; 
                }
            });
        
            isDisplayed = true;
        });
        
    }
});

document.querySelector("#user-timeline").addEventListener("click", function (e) {
    const requirementDataEl = document.getElementById("user-timeline-data");
    const buttons = document.querySelectorAll('.ajax_content.button');
    console.log(requirementDataEl)
    if (isDisplayed) {
        requirementDataEl.innerHTML = "";
        requirementDataEl.classList.remove("full-width");

        buttons.forEach(function(el) {
            if (el.querySelector('input') !== e.target) {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            } else {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/user_timeline", function (data) {
            let str = data;
        
            requirementDataEl.innerHTML = str;
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; 
                }
            });
        
            isDisplayed = true;
        });
        
    }
});

document.querySelector("#user-timeline2").addEventListener("click", function (e) {
    const requirementDataEl = document.getElementById("user-timeline2-data");
    const buttons = document.querySelectorAll('.ajax_content.button');
    console.log(requirementDataEl)
    if (isDisplayed) {
        requirementDataEl.innerHTML = "";
        requirementDataEl.classList.remove("full-width");

        buttons.forEach(function(el) {
            if (el.querySelector('input') !== e.target) {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            } else {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/user_timeline2", function (data) {
            let str = data;
        
            requirementDataEl.innerHTML = str;
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; 
                }
            });
        
            isDisplayed = true;
        });
        
    }
});

document.querySelector("#user-timeline3").addEventListener("click", function (e) {
    const requirementDataEl = document.getElementById("user-timeline3-data");
    const buttons = document.querySelectorAll('.ajax_content.button');
    console.log(requirementDataEl)
    if (isDisplayed) {
        requirementDataEl.innerHTML = "";
        requirementDataEl.classList.remove("full-width");

        buttons.forEach(function(el) {
            if (el.querySelector('input') !== e.target) {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            } else {
                el.style.display = 'inline-block';
                el.style.width = '16.666666%'; 
            }
        });
        
        isDisplayed = false;
    } else {
        ajaxGET("/user_timeline3", function (data) {
            let str = data;
        
            requirementDataEl.innerHTML = str;
            requirementDataEl.classList.add("full-width");
        
            buttons.forEach(function (el) {
                if (el.querySelector('input') !== e.target) {
                    el.style.display = 'none';
                } else {
                    el.style.display = 'inline-block';
                    el.style.width = '100%'; 
                }
            });
        
            isDisplayed = true;
        });
        
    }
});


});

// callback function declaration
function ready(callback) {
    if (document.readyState != "loading") {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}