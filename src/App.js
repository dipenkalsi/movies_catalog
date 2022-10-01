import 'swiper/swiper.min.css'
// import './swiper/swiper.min.css'
import './App.scss';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Routes from './config/Routes'
// import Button from './components/button/Button';
function App() {
  return (
    <BrowserRouter>
      <Route render={props=>(
        <>
          <Header {...props}/>
          <Routes/>
          <Footer/>
        </>
      )}
      />
    </BrowserRouter>
  );
}

export default App;
