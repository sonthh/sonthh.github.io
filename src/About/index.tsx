
export const About = () => {
  return (
    <div className="profile">
      <img src={process.env.PUBLIC_URL + '/photo/profile.png'} alt="Hồng Sơn" />
      <div className="bio">Contact me</div>
      <div className="phone-number">+84327053245</div>
      <div className="email">tranhuuhongson@gmail.com</div>
      <a href="https://github.com/sonthh">github.com/sonthh</a>
    </div>
  );
}
