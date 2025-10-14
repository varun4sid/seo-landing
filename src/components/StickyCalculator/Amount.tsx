import { useEffect } from "react";
import type { amountState } from "../../constants/interfaces";

function Amount({ amount, setAmount }: amountState) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    useEffect(() => {
        console.log(`Amount : ${amount}`);
    }, [amount]);

    return (
        <fieldset className="m-4 p-4 border-2 border-gray-700 rounded-lg">
            <legend className="font-semibold px-2">Amountdfvkdfbk</legend>
            <input
                type="number"
                id="amount"
                min={0}
                value={amount}
                onChange={handleChange}
                max={1000000000}
                step={1}
                className="mt-2 px-3 py-2 border-2 border-gray-700 rounded w-full"
            />
        </fieldset>
    );
}

export default Amount;
