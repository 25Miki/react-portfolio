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
            <About/>
            <Contact/>
            <FAQs/>
            <FloatingNav/>
            <Footer/>
            <Header/>
            <NavBar/>
            <Portfolio/>
            <Services/>
            <Testimonials/>

        </main>
    )
}

export default App