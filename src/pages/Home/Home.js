import { useRef } from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';
import About from '../About/About';
import Hero from '../../components/Hero/Hero';

const Home = () => {
    const aboutRef = useRef(null);

    const handleAboutScroll = () => {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Hero handleScroll={handleAboutScroll} />
            <About targetRef={aboutRef} />
            <ContactForm />
        </>
    )
}

export default Home; 