// App.jsx
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Cases from './components/Cases/Cases';
import Team from './components/Team/Team';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import CaseDetail from './components/CaseDetail/CaseDetail';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <main>
                <Hero />
                {/* <About /> */}
                <Services />
                <Team />
                <Cases />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route path='/cases/:id' element={<CaseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
