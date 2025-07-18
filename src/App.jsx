import { Link, Outlet } from 'react-router-dom';
import '@/assets/styles/index.scss';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page">page</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
}

export default App;