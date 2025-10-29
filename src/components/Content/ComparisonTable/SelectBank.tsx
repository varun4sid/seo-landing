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

function SelectBank({
    bank,
    setBank,
}: {
    bank: string | null;
    setBank: (val: string) => void;
}) {
    function handleChangeSelection(e: string) {
        setBank(e);
    }

    return (
        <div>
            <Select
                value={bank ? bank : ""}
                onValueChange={handleChangeSelection}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a bank" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>SFBs</SelectLabel>
                        {sfBanks.map((bank) => (
                            <SelectItem
                                value={bank.bankName}
                                key={bank.bankName}
                            >
                                {bank.bankName}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export default SelectBank;
