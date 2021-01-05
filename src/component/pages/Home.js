import React from 'react';
import '../../App.css'
import Tours from '../Tours';
import TravelSection from '../TravelSection';
import Footer from '../Footer';

function Home(){
    return (
        <>
        <TravelSection></TravelSection>
        <Tours />
        <Footer />
        </>
        );
}


export default Home;