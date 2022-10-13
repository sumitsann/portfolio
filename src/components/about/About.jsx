import "./about.css";
import Award from "../../img/award.jpg";
import AboutPic from "../../img/about.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={AboutPic}
            alt="Coder In Front Of System"
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Myself</h1>
        <p className="a-sub">
          I am a Software Developer with knowledge on production of web and
          mobile applications.
        </p>
        <p className="a-desc">
          I have good understanding and technical expertise in Computer Science
          fundamentals, Javascript, ReactJS, Redux, NodeJS, MongoDB, CSS, HTML
          and other technologies. I graduated from Tarleton State University in
          Bachelor in Computer Information Systems in May 2021.
        </p>
        <div className="a-award">
          <img src={Award} alt="Awards I Have Won" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Phi Theta Kappa Membership</h4>
            <p className="a-award-desc">
              Member of Phi Theta Kappa since 2017 January.
            </p>

            <h4 className="a-award-title">Magna Cum Laude</h4>
            <p className="a-award-desc">
              Magna Cum Laude Award due to Higher GPA score.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
