import StickyCalculator from "./StickyCalculator/StickyCalculator";
import "./Content.css";
import Article from "./Article/Article";

function Content() {
    return (
        <div className="content-container">
            <Article />
            <StickyCalculator />
        </div>
    );
}

export default Content;
