

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    homepageContent: {
        welcomeMessage: 'Welcome to Mofi!',
        Features:'Features with title',
        herocontent:'Ignite Your Career with Learning the Largest Online Platform..',
        introduction: 'We are excited to have you here. Explore and enjoy the content we have to offer.',
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

        images :[
          {
            url:'/public/images/about_12.png'
          }
        ],

        button1: 'Primary Button',
        button2:'Secondary Button',
            
           
      },
  aboutpageContent: 'This is the About Page.',
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
});

export default contentSlice.reducer;
