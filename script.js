


/*contact us*/
function validateForm() {
    // Get form fields
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"].value;
    
    // Check if any field is empty
    if (name === "") {
      alert("Please fill out the Name field.");
      return false;
    }
    if (email === "") {
      alert("Please fill out the Email field.");
      return false;
    }
    if (message === "") {
      alert("Please fill out the Message field.");
      return false;
    }
    
    // Form is valid if we reach here
    return true;
  }
