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
import type { SchemeTerms } from "@/constants/interfaces";
import { useEffect, useState } from "react";

function SelectScheme({
    bank,
    quota,
    setScheme,
}: {
    bank: null | string;
    quota: boolean;
    setScheme: (val: SchemeTerms | null) => void;
}) {
    const [selected, setSelected] = useState("");

    useEffect(() => {
        setSelected("");
        setScheme(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bank]);

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
        setSelected(arg);
        const sfBank = sfBanks.filter((sfBank) => sfBank.bankName === bank)[0];
        const { bankName, account_required, dicgc_insured } = sfBank;
        const { tenure, rate } = sfBank.schemes.filter(
            (scheme) => scheme.tenure === Number(arg)
        )[0];

        setScheme({ bankName, tenure, rate, account_required, dicgc_insured });
    }

    const selectedBank = sfBanks.filter(
        (sfBank) => sfBank.bankName === bank
    )[0];

    return (
        <div>
            <Select value={selected} onValueChange={handleChangeSelection}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a scheme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{bank + " Schemes"}</SelectLabel>
                        {selectedBank.schemes.map((fd) => {
                            if (fd.tenure !== 0) {
                                const interest = quota
                                    ? fd.rate.senior
                                    : fd.rate.regular;
                                return (
                                    <SelectItem
                                        value={String(fd.tenure)}
                                        key={fd.tenure}
                                    >
                                        {interest + "% (" + fd.tenure + "Y)"}
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
