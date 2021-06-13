filterSelection("all") // execute the function and show all columns
function filterSelection(c) {
    console.log(c)
    var x, i;
    x = document.getElementsByClassName("gallery-element");
    if (c == "all") c = "";
    // add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}

// add show to the elements that are selected
function addClass(element, name) {
  var i, classArr, nameArr;
  classArr = element.className.split(" ");
  nameArr = name.split(" ");
  for (i = 0; i < nameArr.length; i++) {
    if (classArr.indexOf(nameArr[i]) == -1) {
      element.className += " " + nameArr[i];
    }
  }
}

// remove show from elements that are not selected
function removeClass(element, name) {
  var i, classArr, nameArr;
  classArr = element.className.split(" ");
  nameArr = name.split(" ");
  for (i = 0; i < nameArr.length; i++) {
    while (classArr.indexOf(nameArr[i]) > -1) {
      classArr.splice(classArr.indexOf(nameArr[i]), 1);
    }
  }
  element.className = classArr.join(" ");
}

// add active to the current button (highlight it)
var btnContainer = document.getElementById("categories");
if(btnContainer != undefined) {
  var btns = btnContainer.getElementsByClassName("category");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
    });
  }
}