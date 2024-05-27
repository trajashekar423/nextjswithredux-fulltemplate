"use client"


import { Poppins } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from "react-redux";
import store from "./store";
import Header from "./maincomponents/Header";
import Footer from "./maincomponents/footer";

const poppins = Poppins({ subsets: ["latin"],weight:['400','500','400'] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider store={store}>
          <Header/>
        {children}
        <Footer/>
        </Provider>
        </body>
    </html>
  );
}
