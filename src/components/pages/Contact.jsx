import { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };
  return (
    <section className='contact fade-in'>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <input 
            type="text"
            name='name'
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required />
        <input 
            type="email"
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required />
        <textarea 
            name="message"
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required/>
        <button type='submit'>Send Message</button>
      </form>
      {status && <p className='status'>{status}</p>}
    </section>
  )
}

export default Contact
