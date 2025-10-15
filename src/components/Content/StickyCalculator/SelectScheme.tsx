import { suryoday } from "../../../constants/db";
import type { schemeState } from "../../../constants/interfaces";

function SelectScheme({ setScheme }: schemeState) {
    function handleChangeScheme(e: React.ChangeEvent<HTMLSelectElement>) {
        setScheme(Number(e.target.value));
    }

    return (
        <div>
            <fieldset className="m-4 p-4 border-2 border-gray-700 rounded-lg">
                <legend className="font-semibold px-2">Scheme</legend>
                <select
                    name="sticky-scheme"
                    id="sticky-scheme"
                    onChange={handleChangeScheme}
                >
                    <option value="" disabled>
                        Select
                    </option>
                    {suryoday.schemes.map((scheme) => (
                        <option
                            value={scheme.tenure}
                        >{`${scheme.rate}% (${scheme.tenure}Y)`}</option>
                    ))}
                </select>
            </fieldset>
        </div>
    );
}

export default SelectScheme;
