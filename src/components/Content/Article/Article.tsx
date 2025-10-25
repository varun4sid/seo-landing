import Banner from "@/components/Banner";
import FAQ from "./FAQ";
import RatesTable from "./RatesTable";

function Article() {
    return (
        <div className="content-main">
            <Banner />
            <RatesTable />
            <FAQ />
        </div>
    );
}

export default Article;
