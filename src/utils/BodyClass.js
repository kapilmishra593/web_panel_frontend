"use client"
import  { Component } from 'react';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
class BodyClass extends Component {

    componentDidMount() {
        if (window.location.pathname == '/') {
            this.setBodyClass('home');
            
        } else if (window.location.pathname == '/locations') {
            this.setBodyClass('locations');
        } 
    }

    setBodyClass(className) {
        // remove other classes
        document.body.className ='';

        // assign new class
        document.body.classList.add(className,inter.className);
    }

    render() { 
        return null;
    }

}
 
export default BodyClass;