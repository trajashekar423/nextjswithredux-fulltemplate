

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    homepageContent: {
        welcomeMessage: 'Welcome to our awesome website!',
        Features:'Features with title',
        herocontent:'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.',
        introduction: 'We are excited to have you here. Explore and enjoy the content we have to offer.',
        featuredArticles: [
          { id: 1, title: 'How to Use Next.js', summary: 'Learn the basics of Next.js and how to get started.' },
          { id: 2, title: 'Understanding Redux Toolkit', summary: 'A deep dive into Redux Toolkit and its benefits.' },
          { id: 3, title: 'Building Modern Web Apps', summary: 'Best practices for building modern web applications.' },
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
