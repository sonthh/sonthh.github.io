import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="profile">
      <img src={process.env.PUBLIC_URL + '/photo/profile.png'} alt="Hồng Sơn" />
      <Link to="/about">#About me</Link>
    </div>
  );
}
