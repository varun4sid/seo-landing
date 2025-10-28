import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { suryoday } from "@/constants/db";
import type { selectSchemeProps } from "@/constants/interfaces";

function SelectScheme({ setScheme, setQuota, quota }: selectSchemeProps) {
    function handleChangeScheme(e: React.ChangeEvent<HTMLSelectElement>) {
        setScheme(Number(e.target.value));
    }

    function handleChangeQuota(checked: boolean | "indeterminate") {
        setQuota(Boolean(checked));
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
                        <option value={scheme.tenure}>{`${
                            quota ? scheme.rate.senior : scheme.rate.regular
                        }% (${scheme.tenure}Y)`}</option>
                    ))}
                </select>
            </fieldset>
            <div className="m-5 flex items-center space-x-2">
                <Switch id="quota" onCheckedChange={handleChangeQuota} />
                <Label htmlFor="quota">Senior Citizen</Label>
            </div>
        </div>
    );
}

export default SelectScheme;
