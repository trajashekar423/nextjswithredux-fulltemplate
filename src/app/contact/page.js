"use client"

import Maps from './maps';
import { useDispatch, useSelector } from 'react-redux';
import { setContactForm, submitContactForm } from '../store/contentSlice';

const ContactPage = () => {
  const dispatch = useDispatch();
  const contactForm = useSelector((state) => state.content.contactForm);
  const {contactheading } = contactForm;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setContactForm({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContactForm());
  };

  return (
    <div>
   
   <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{contactheading}</h1>
        <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <button class="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-6'>
        <div>
    
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
        <label for="exampleInputEmail1" class="form-label">Name</label>          
          <input type="text" name="name" id="name"class="form-control" value={contactForm.name} onChange={handleChange}></input>
        </div>
        <div className='mb-3'>
        <label for="exampleInputEmail1" class="form-label">Email</label>          
          <input type="text" name="email" className="form-control" value={contactForm.email} onChange={handleChange}></input>
        </div>
        <div className='mb-3'>
        <label for="exampleInputEmail1" class="form-label">Message</label>          
          <input type="email"name="message" className="form-control" value={contactForm.message} onChange={handleChange}></input>
        </div>
       
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
        </div>

        <div className='col-sm-6'>
          <Maps/>
        </div>

      </div>
    </div>
    </div>
  );
};

export default ContactPage;
