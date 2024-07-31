import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeCrud from './assets/components/RecipeCrud';
import Tab from './assets/components/Tab';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<RecipeCrud />} /> */}
        <Route path='/' element={<Tab />} />
      </Routes>
    </Router>
  );
}

export default App;
