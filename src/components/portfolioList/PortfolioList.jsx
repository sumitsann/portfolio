import "./portfolioList.css";
import Portfolio from "../portfolio/Portfolio";
import { portfolios } from "../../data";

const PortfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Portfolios</h1>
        <p className="pl-desc">
          I want to become a full-stack developer who can develop inspirational
          websites. Here are some of my previous works that I have done.
        </p>
      </div>
      <div className="pl-list">
        {portfolios.map((project) => (
          <Portfolio
            key={project.id}
            img={project.img}
            link={project.link}
          ></Portfolio>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
