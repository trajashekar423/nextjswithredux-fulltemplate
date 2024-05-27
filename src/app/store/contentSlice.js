

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    homepageContent: {
      bannerlogo:{
        logo:'/images/landing_logo.png',
      },
        welcomeMessage: 'Welcome to Mofi!',
        Features:'Features with title',
        herocontent:'Ignite Your Career with Learning the Largest Online Platform..',
        introduction: 'We are excited to have you here. Explore and enjoy the content we have to offer.',
        Reliable:'Reliable construction service since 1973. We are not just building houses. We are building dreams.',
        eduheading1:[
          {
            edupara1:'25+Contrary to popular belief, Lorem Ipsum is not simply random text roots in a piece of classical Latin literature from 45 BC'
          },
          {
            list1:'Explore a variety of fresh educational teach',
            list2:'Explore a variety of fresh educational teach',
            list3:'Explore a variety of fresh educational teach'
          }
        ],
        featuredArticles: [
          { id: 1, title: 'How to Use Next.js', summary: 'Learn the basics of Next.js and how to get started.' },
          { id: 2, title: 'Understanding Redux Toolkit', summary: 'A deep dive into Redux Toolkit and its benefits.' },
          { id: 3, title: 'Building Modern Web Apps', summary: 'Best practices for building modern web applications.' },
        ],

        services:[
          {serviceheading:'Planning & Architecture',para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          bannerimage:'/images/team-banner2.jpg'
          
        },
          {serviceheading:'Construction',para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          bannerimage:'/images/2.jpg'},
          {serviceheading:'House renovation',para:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
          bannerimage:'/images/3.jpg'}
        ],
        images :[
          {
            url:'/images/about_12.png',
            logo:'/images/landing_logo.png',
            service1:'/images/1.jpg',
            bannerimage:'/images/team-banner2.jpg'
          }
        ],

        button1: 'Learn More',
        button2:'Read more',
            
           
      },
  aboutpageContent: 'This is the About Page.',
  footerlinks:[ 
    {Links:'Home',url:"https://getbootstrap.com/docs/5.3/examples/navbars-offcanvas/"},
    {Links:'About'},
    {Links:'Services'},
    {Links:'Contact'},
    {copyright:'© 2024 Company, Inc'}

],

 servicepageContent: {
  introduction: 'We are excited to have you here. Explore and enjoy the content we have to offer.',
  servicesimages :[
    {
      team:'/images/team-banner2.jpg',
      server:'/images/server.png',
      
    }
  ]
  
 },

 contactForm: {
  name: '',
  email: '',
  number: '',
  message: '',
  contactheading:'Contact Us'
},

};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContactForm(state, action) {
      state.contactForm = {
        ...state.contactForm,
        ...action.payload,
      };
    },
    submitContactForm(state) {
      // Handle form submission logic here, e.g., sending data to a server
      console.log('Form submitted:', state.contactForm);
      // Reset form fields after submission
      state.contactForm = { name: '', email: '', message: '' };
    },
  },
});


export const { setContactForm, submitContactForm } = contentSlice.actions;

export default contentSlice.reducer;
