import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Layout from './pages/layout';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
