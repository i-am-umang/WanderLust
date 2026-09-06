(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  
  // DEBUG: Check if the script actually found the form
  console.log("Script loaded. Number of forms found:", forms.length);

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      
      // DEBUG: Check if the submit click is detected
      console.log("Submit button clicked!");

      if (!form.checkValidity()) {
        // DEBUG: Check if validity check failed
        console.log("Form is INVALID. Stopping submission.");
        
        event.preventDefault()
        event.stopPropagation()
      } else {
        // DEBUG: Check if browser thinks form is okay
        console.log("Form is VALID. Submitting...");
      }

      form.classList.add('was-validated')
    }, false)
  })
})()