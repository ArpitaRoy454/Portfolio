      burger = document.querySelector(".burger");
      navbar = document.querySelector(".navbar");
      leftnav = document.querySelector(".left");
      rightnav = document.querySelector(".right");

      burger.addEventListener("click", () => {
        rightnav.classList.toggle("v-nav-res");
        leftnav.classList.toggle("v-nav-res");
        navbar.classList.toggle("h-nav-res");
      });
   

   
      var tablinks = document.getElementsByClassName("tablinks");
      var tabcontents = document.getElementsByClassName("tabcontents");

      function opentab(tabname) {
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }

        document.getElementById(tabname).classList.add("active-tab");
      }

      const scriptURL = 'https://script.google.com/macros/s/AKfycbymnd9BSHXtSZIDgplyqoC4TSFZatlTI1qzJuCivAsMlqUteDKyVqDZV4zqPT5niYu4jA/exec'
      const form = document.forms['submit-to-google-sheet']
     const msg=document.getElementById('msg');
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            msg.innerHTML="Message sent successfully"
            setTimeout(function(){
              msg.innerHTML=""
            },5000)
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })