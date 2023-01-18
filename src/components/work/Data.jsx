import House from "../../assets/house_price.jpg";
import Sentiment from "../../assets/Sentiment.jpg";
import Loan from "../../assets/Loan-Guidelines.jpg";
import MacbookBi from "../../assets/macbook-bi.jpg";
import TabDesign from "../../assets/tab_design_3.jpg";
import Home from "../../assets/home.jpg";

export const projectsData = [
  {
    id: 1,
    image: Sentiment,
    title: "Sentiment Analysis on Movie Review",
    category: "Data Science",
    url: "https://github.com/emmanuel-yegon/movie_sentiment",
  },
  {
    id: 2,
    image: Loan,
    title: "Loan Eligibility Prediction ",
    category: "Data Science",
    url: "https://github.com/emmanuel-yegon/loan_legibility",
  },
  {
    id: 3,
    image: House,
    title: "Home Price Prediction",
    category: "Data Science",
    url: "https://github.com/emmanuel-yegon/house_price_prediction_model",
  },
  {
    id: 4,
    image: MacbookBi,
    title: "Power BI Dashboard",
    category: "Data Analysis",
    url: "https://github.com/emmanuel-yegon/powerbi_dashboards",
  },
  {
    id: 5,
    image: TabDesign,
    title: "Tableau Report",
    category: "Data Analysis",
  },
  {
    id: 6,
    image: Home,
    title: "Movie Reviews Prediction UI",
    category: "Web design",
  },
];


export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Data Science",
  },
  {
    name: "Data Analysis",
  },
  {
    name: "Web Design"
  }
  
]; 