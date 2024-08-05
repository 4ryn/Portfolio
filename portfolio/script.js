document.addEventListener("DOMContentLoaded", function() {
  // Typing Animation
  const txtElement = document.querySelector(".txt-type");
  const words = txtElement.getAttribute("data-words").split(",");
  const wait = parseInt(txtElement.getAttribute("data-wait"));
  let wordIndex = 0;
  let letterIndex = 0;
  let typingInterval;

  function typeWord() {
      if (letterIndex < words[wordIndex].length) {
          txtElement.textContent += words[wordIndex].charAt(letterIndex);
          letterIndex++;
          typingInterval = setTimeout(typeWord, 110); // Adjust typing speed as needed
      } else {
          setTimeout(eraseWord, wait);
      }
  }

  function eraseWord() {
      if (letterIndex > 0) {
          txtElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
          letterIndex--;
          typingInterval = setTimeout(eraseWord, 120); // Adjust erasing speed as needed
      } else {
          wordIndex++;
          if (wordIndex >= words.length) {
              wordIndex = 0;
          }
          setTimeout(typeWord, 500);
      }
  }

  typeWord();

  // Tab Switching
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname, event) {
      for (let tablink of tablinks) {
          tablink.classList.remove("active-link");
      }
      for (let tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
  }

  // Attach event listeners to tab links
  for (let tablink of tablinks) {
      tablink.addEventListener("click", function(event) {
          opentab(tablink.getAttribute("data-tab"), event);
      });
  }
});
