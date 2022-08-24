// import React, { useState } from 'react';
// import './index.scss';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Services from './components/Services';
// import Faq from './components/Faq';
// import Footer from './components/Footer';
// import Newsletter from './components/Newsletter';
// import Gallery from './components/Gallery';
// import About from './components/About';
// import Trainers from './components/Trainers';
// import Pricing from './components/Pricing';
// import Login from './components/Logged/Login';
// import Register from './components/Logged/Register';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Switch,
// } from 'react-router-dom';

// export default function App() {
//   const output = (
//     <div className="output">
//       <Router>
//         <div>
//           <Home />
//           <Services />
//           <Faq />
//           <Routes>
//             <Route path="/" caseSensitive={false} element={<Home />} />
//           </Routes>
//           <Routes>
//             <Route path="/about" caseSensitive={false} element={<About />} />
//             <Route
//               path="/gallery"
//               caseSensitive={false}
//               element={<Gallery />}
//             />
//             <Route
//               path="/pricing"
//               caseSensitive={false}
//               element={<Pricing />}
//             />
//             <Route
//               path="/trainers"
//               caseSensitive={false}
//               element={<Trainers />}
//             />
//           </Routes>
//           <Newsletter />
//         </div>
//       </Router>
//     </div>
//   );

//   const logginIn = <Login close={closeModal} signin={handleSign} />;
//   const signingIn = <Register close={closeModal} login={handleLog} />;

//   const [body, setBody] = useState(output);

//   function handleLog() {
//     setBody(logginIn);
//     alert('Log In');
//   }

//   function handleSign() {
//     setBody(signingIn);
//     alert('sign In');
//   }

//   function closeModal() {
//     setBody(output);
//   }

//   return (
//     <div>
//       <Navbar signed={handleSign} logged={handleLog} />
//       {body}
//       <Footer />
//     </div>
//   );
// }
