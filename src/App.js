import './style/App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';






function App() {
  return (
    <>
   
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
    </>
    
  );
}

export default App;

// import './style/App.css';
// import Nav from './components/Nav';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Booking from './components/Booking';
// import ConfirmedBooking from './components/ConfirmedBooking';
// import { Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Nav />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Header />
//             <Main />
//           </>
//         } />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/confirmed" element={<ConfirmedBooking />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

