import { useState } from "react";
import Amount from "./Amount";
import SelectScheme from "./SelectScheme";
import { getReturns } from "../../../constants/calculations";
import { suryoday } from "../../../constants/db";

function StickyCalculator() {
    const [amount, setAmount] = useState(100000);
    const [scheme, setScheme] = useState(5);

    const select = suryoday.schemes.filter(
        (object) => object.tenure === scheme
    )[0];
    const returns = getReturns(amount, select.rate, select.tenure);

    return (
        <div className="sticky-calculator content-sub">
            <p className="m-1">Explore best returns from Suryoday SFB</p>
            <div className="horizontal"></div>
            <Amount amount={amount} setAmount={setAmount} />
            <SelectScheme setScheme={setScheme} />
            <p>Maturity Amount : {returns.maturity}</p>
            <p>Total Return : {returns.return}</p>
        </div>
    );
}

export default StickyCalculator;
