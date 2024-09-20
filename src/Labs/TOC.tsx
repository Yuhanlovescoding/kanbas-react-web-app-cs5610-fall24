import { Link } from 'react-router-dom';

export default function TOC() {
  return (
    <ul>
      <li><Link to="/Labs">Labs</Link></li>
      <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      <li><Link to="/Kanbas">Kanbas</Link></li>
      <li><a href="https://github.com/Yuhanlovescoding/kanbas-react-web-app-cs5610-fall24" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    </ul>
  );
}
    