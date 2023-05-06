import About from './sections/about/About';
import Contact from './sections/contact/Contact';
import FAQs from './sections/faqs/FAQs';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import NavBar from './sections/navbar/NavBar';
import Portfolio from './sections/portfolio/Portfolio';
import Services from './sections/services/Services';
import Testimonials from './sections/testimonials/Testimonials';

const App = () => {
    return (
        <main>
            <Header/>            
            <NavBar/>
            <About/>
            <Contact/>
            <FAQs/>
            <FloatingNav/>
            <Portfolio/>
            <Services/>
            <Testimonials/>            
            <Footer/>
        </main>
    )
}

export default App