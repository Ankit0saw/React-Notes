import React from 'react'

const FormPage = () => {
  return (
    <form>
      <h2>Contact Form</h2>

      <label>Name:</label><br />
      <input type="text" placeholder="Enter your name" /><br />

      <label>Email:</label><br />
      <input type="email" placeholder="Enter your email" /><br />

      <label>Message:</label><br />
      <textarea placeholder="Your message here..."></textarea><br />

      <button type="submit">Submit</button>
    </form>
  )
}

export default FormPage
