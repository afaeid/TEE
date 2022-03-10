//This function is changing web language to English.
function changeLangtoen() {
 document.getElementById("bn-lang").innerHTML = "English";
 document.getElementById("academic").innerHTML = "Academic Study";
 document.getElementById("assignment").innerHTML = "Assignment";
 document.getElementById("mcq").innerHTML = "MCQ";
 document.getElementById("creative").innerHTML = "Creative Questions";
  document.getElementById("mobile_academic").innerHTML = "Academic Study";
 document.getElementById("mobile_assignment").innerHTML = "Assignment";
 document.getElementById("mobile_mcq").innerHTML = "MCQ";
 document.getElementById("mobile_creative").innerHTML = "Creative Questions";
 document.getElementById("mobile_lang_en").style.color = "#FF6565";
 document.getElementById("mobile_lang_bn").style.color = "black";
 document.getElementById("mobile_lang_name").innerHTML = "Language";
 
}

//This function is changing web language to Bangla.
function changeLangtobn() {
 document.getElementById("bn-lang").innerHTML = "বাংলা";
 document.getElementById("academic").innerHTML = "একাডেমিক পড়াশোনা";
 document.getElementById("assignment").innerHTML = "অ্যাসাইনমেন্ট" ;
 document.getElementById("mcq").innerHTML = "বহুনির্বাচনী প্রশ্ন";
 document.getElementById("creative").innerHTML = "সৃজনশীল প্রশ্ন";
 document.getElementById("mobile_academic").innerHTML = "একাডেমিক পড়াশোনা";
 document.getElementById("mobile_assignment").innerHTML = "অ্যাসাইনমেন্ট";
 document.getElementById("mobile_mcq").innerHTML = "বহুনির্বাচনী প্রশ্ন";
 document.getElementById("mobile_creative").innerHTML = "সৃজনশীল প্রশ্ন";
 document.getElementById("mobile_lang_bn").style.color = "#FF6565";
 document.getElementById("mobile_lang_en").style.color = "black";
 document.getElementById("mobile_lang_name").innerHTML = "ভাষাঃ";

 
}
//This function is for the language list open and close. 
function showlanguage() {
  document.getElementById("lang-list").classList.toggle("show");
 // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.lang')) {
    var dropdowns = document.getElementsByClassName("lang-lists");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

}
function mobilemenu() {
   document.getElementById("content_of_mobile_menu").classList.toggle("visibility");
}
