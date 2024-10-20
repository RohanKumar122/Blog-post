import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx';

const AppLayout = () => {
  return (
    <div class="bg-red">
      <Navbar />
      <App />
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <AppLayout/>
)
