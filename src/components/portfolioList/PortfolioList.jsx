import "./portfolioList.css";
import Portfolio from "../portfolio/Portfolio";
import { portfolios } from "../../data";

const PortfolioList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create irational Websites</h1>
        <p className="pl-desc">
          I want to become a full-stack developer who can develop inspirational
          websites.
        </p>
      </div>
      <div className="pl-list">
        {portfolios.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
