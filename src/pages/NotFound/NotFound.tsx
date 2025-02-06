import { Link } from 'react-router-dom';
import { JSX } from 'react';

const NotFound: () => JSX.Element = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
