//Must use a .css, .js, and .html file to separate the different languages that will be used.
//There must be at least two meaningful animations used to enhance the viewing experience of your resume. A meaningful animation means that the animation occurs as a result of direct user interaction. For example, when a header in the resume is clicked, the header expands to reveal more information. An un-meaningful animation might be that when the page loads, the text changes color.
//The resume must be one page, include accurate information about you, your experience, and should be free of spelling errors.
//There must be at least six unique stylings used to enhance the aesthetic quality of the resume.
//These styles can be as simple as font-size, or as complex as a flex-box container.
//Use jQuery callback functions to create smooth animations, transitions, or event handling. For instance, you can add a callback function for a button click event.

$(document).ready(function(){
    var arrows = document.getElementsByClassName("arrow");
   for (var i = 0; i < arrows.length; i++) {
     arrows[i].addEventListener("click", function (e) {
       console.log('test')
       var parent = e.target.parentNode;
       var content = parent.previousElementSibling;
       if (content.classList.contains("hidden")) {
         content.classList.remove("hidden");
         setTimeout(function () {
           content.classList.remove("visuallyhidden");
         }, 50);
         e.target.classList.remove("fa-angle-double-down");
         e.target.classList.add("fa-angle-double-up");
       } else {
         content.classList.add("visuallyhidden");


         content.addEventListener(
           "transitionend",
           function (d) {
             content.classList.add("hidden");
             e.target.classList.remove("fa-angle-double-up");
             e.target.classList.add("fa-angle-double-down");
           },
           {
             capture: false,
             once: true,
             passive: false,
           }
         );
       }
     }, false);
   }

});