import { Link } from 'react-router-dom';
import { JSX } from 'react';

const Welcome: () => JSX.Element = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Welcome;
