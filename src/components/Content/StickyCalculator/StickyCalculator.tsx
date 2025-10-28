import { useState } from "react";
import Amount from "./Amount";
import SelectScheme from "./SelectScheme";
import { getReturns } from "@/constants/calculations";
import { suryoday } from "@/constants/db";

function StickyCalculator() {
    const [amount, setAmount] = useState(100000);
    const [scheme, setScheme] = useState(5);

    const select = suryoday.schemes.filter(
        (object) => object.tenure === scheme
    )[0];
    const returns = getReturns(amount, select.rate.regular, select.tenure);

    return (
        <div className="sticky-calculator content-sub mt-3">
            <div className="p-2">
                <p className="m-1 font-bold">
                    Explore best returns from Suryoday SFB
                </p>
                <div className="horizontal"></div>
                <Amount amount={amount} setAmount={setAmount} />
                <SelectScheme setScheme={setScheme} />
                <div className="ml-4 mt-2 font-light flex justify-between">
                    <p>
                        {"Rs "}
                        <span className="text-green-700 font-bold">
                            {returns.maturity}
                        </span>
                        <span className="block">Maturity Amount</span>
                    </p>
                    <p>
                        {"Rs "}
                        <span className="text-green-700 font-bold">
                            {returns.return}
                        </span>
                        <span className="block">Total Return</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StickyCalculator;
