import Banner from "@/components/Banner";
import FAQ from "./FAQ";
import RatesTable from "./RatesTable";
import ComparisonTable from "../ComparisonTable/ComparisonTable";

function Article() {
    return (
        <div className="content-main">
            <Banner />
            <RatesTable />
            <ComparisonTable />
            <FAQ />
        </div>
    );
}

export default Article;
