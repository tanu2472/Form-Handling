import { createRoot } from 'react-dom/client';
import './Home.css';
import Home from './Home.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);

