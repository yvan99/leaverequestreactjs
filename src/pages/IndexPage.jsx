import React, { Component } from 'react';
import HomeNav from '../components/HomeNav';
import Hero from './../components/Hero';
import { Feature } from './../components/index/features';
import { Footer } from './../components/index/footer';
class IndexPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='bg-white'>
            <HomeNav/>
            <Hero/>
            <Feature/>
            <Footer/>
            </div>
         );
    }
}
 
export default IndexPage;