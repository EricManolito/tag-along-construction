import 'flowbite'
import emailjs from 'emailjs-com';


// Wait for the page to fully load before attaching form logic
window.onload = function () {

  // Select the first <form> element
  const form = document.querySelector('form');

  // Attach a submit event listener to the form
  form.addEventListener('submit', function (e) {

    // Prevent default form submission behavior
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs.sendForm(
      'service_xc9f635',         // Service ID from EmailJS account
      'template_j2xq6qp',       //  Template ID from EmailJS account
      form,
      'Pe9XOguYaLFLK61Gc'          // Your Public Key from EmailJS dashboard
    )
      .then(() => {

        // Notify user of success
        alert('Message sent successfully!');

        // Clear the form fields
        form.reset();
      })
      .catch((error) => {

        // Notify user of error with error message
        alert('Failed to send message: ' + error.text);
      });
  });
};

