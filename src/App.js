// // Import core React router and your pages
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AddItem from './AddItem/AddItem';
// import ViewItems from './ViewItem/ViewItems';
// import './App.css'; // Import styles

// function App() {
//   return (
//     <Router>
//       <nav className="main-nav">
//         <ul>
//           <li><Link to="/add">Add Item</Link></li>
//           <li><Link to="/view">View Items</Link></li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/add" element={<AddItem />} />
//         <Route path="/view" element={<ViewItems />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './AddItem/AddItem';
import ViewItems from './ViewItem/ViewItems';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Add Item</Link>
        <Link to="/view">View Items</Link>
      </div>
      <Routes>
        <Route path="/" element={<AddItem />} />
        <Route path="/view" element={<ViewItems />} />
      </Routes>
    </Router>
  );
}

export default App;

