import 'flowbite'
import emailjs from 'emailjs-com'

// Wait for the page to fully load before attaching form logic
window.onload = function () {

  // Select the first <form> element
  const form = document.querySelector('form')

  // Check if form exists before attaching listener
  if (!form) {
    console.error('Contact form not found on page')
    return
  }

  // Attach a submit event listener to the form
  form.addEventListener('submit', function (e) {

    // Prevent default form submission behavior
    e.preventDefault()

    // Validate EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is incomplete. Missing environment variables:',
        !serviceId ? 'VITE_EMAILJS_SERVICE_ID' : '',
        !templateId ? 'VITE_EMAILJS_TEMPLATE_ID' : '',
        !publicKey ? 'VITE_EMAILJS_PUBLIC_KEY' : ''
      )
      alert('Unable to send message: Email service is not properly configured.')
      return
    }

    // Send the form data using EmailJS
    emailjs.sendForm(
      serviceId,
      templateId,
      form,
      publicKey
    )
      .then(() => {

        // Notify user of success
        alert('Message sent successfully!')

        // Clear the form fields
        form.reset()
      })
      .catch((error) => {

        // Notify user of error with error message
        alert('Failed to send message: ' + error.message)
      })
  })
}

