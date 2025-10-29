import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { sfBanks } from "@/constants/db";
import type { RatePair } from "@/constants/interfaces";

function SelectScheme({
    bank,
    quota,
    setScheme,
}: {
    bank: null | string;
    quota: boolean;
    setScheme: (val: RatePair | null) => void;
}) {
    if (!bank) {
        return (
            <Select>
                <SelectTrigger disabled className="w-full">
                    -
                </SelectTrigger>
            </Select>
        );
    }

    function handleChangeSelection(arg: string) {
        const rate = sfBanks
            .filter((sfBank) => sfBank.bankName === bank)[0]
            .schemes.filter((scheme) => scheme.tenure === Number(arg))[0].rate;
        setScheme(rate);
    }

    const selectedBank = sfBanks.filter(
        (sfBank) => sfBank.bankName === bank
    )[0];

    return (
        <div>
            <Select onValueChange={handleChangeSelection}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a scheme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{bank + " Schemes"}</SelectLabel>
                        {selectedBank.schemes.map((scheme) => {
                            if (scheme.tenure !== 0) {
                                const interest = quota
                                    ? scheme.rate.senior
                                    : scheme.rate.regular;
                                return (
                                    <SelectItem
                                        value={String(scheme.tenure)}
                                        key={scheme.tenure}
                                    >
                                        {interest +
                                            "% (" +
                                            scheme.tenure +
                                            "Y)"}
                                    </SelectItem>
                                );
                            }
                        })}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export default SelectScheme;
