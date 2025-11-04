import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { suryoday } from "@/constants/db";
import type { selectSchemeProps } from "@/constants/interfaces";

function SelectScheme({ setScheme, setQuota, quota }: selectSchemeProps) {
    function handleChangeQuota(checked: boolean | "indeterminate") {
        setQuota(Boolean(checked));
    }

    function handleChangeSelection(arg: string) {
        setScheme(Number(arg));
    }

    return (
        <div>
            <fieldset className="m-4 p-4 border-2 border-gray-700 rounded-lg">
                <legend className="font-semibold px-2">Scheme</legend>
                <Select onValueChange={handleChangeSelection}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a scheme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {suryoday.schemes.map((fd) => {
                                if (fd.tenure !== 0) {
                                    const interest = quota
                                        ? fd.rate.senior
                                        : fd.rate.regular;
                                    return (
                                        <SelectItem
                                            value={String(fd.tenure)}
                                            key={fd.tenure}
                                        >
                                            {interest +
                                                "% (" +
                                                fd.tenure +
                                                "Y)"}
                                        </SelectItem>
                                    );
                                }
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </fieldset>
            <div className="m-5 flex items-center space-x-2">
                <Switch id="quota" onCheckedChange={handleChangeQuota} />
                <Label htmlFor="quota">Senior Citizen</Label>
            </div>
        </div>
    );
}

export default SelectScheme;
