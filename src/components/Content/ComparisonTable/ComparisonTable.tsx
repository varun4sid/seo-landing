import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import SelectBank from "./SelectBank";
import SelectScheme from "./SelectScheme";
import type { RatePair } from "@/constants/interfaces";

function ComparisonTable() {
    const [amount, setAmount] = useState(100000);
    const [quota, setQuota] = useState(false);
    const [bank1, setBank1] = useState("SBI");
    const [bank2, setBank2] = useState("");
    const [scheme1, setScheme1] = useState<RatePair | null>();
    const [scheme2, setScheme2] = useState<RatePair | null>();

    function handleChangeAmount(e: React.ChangeEvent<HTMLInputElement>) {
        setAmount(Number(e.target.value));
    }

    function handleChangeQuota(checked: boolean | "indeterminate") {
        setQuota(Boolean(checked));
    }

    return (
        <div id="comparison">
            <div className="flex justify-between">
                <div className="">
                    <Label htmlFor="comparison-amount" className="m-2">
                        Amount
                    </Label>
                    <Input
                        type="number"
                        min={0}
                        max={30000000}
                        value={amount}
                        onChange={handleChangeAmount}
                        id="comparison-amount"
                    />
                </div>
                <div className="m-5 flex items-center space-x-2">
                    <Switch id="quota" onCheckedChange={handleChangeQuota} />
                    <Label htmlFor="quota">Senior Citizen</Label>
                </div>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead rowSpan={2}>Features</TableHead>
                            <TableHead>
                                <SelectBank bank={bank1} setBank={setBank1} />
                            </TableHead>
                            <TableHead>
                                <SelectBank bank={bank2} setBank={setBank2} />
                            </TableHead>
                        </TableRow>
                        <TableRow>
                            <TableHead>
                                <SelectScheme
                                    setScheme={setScheme1}
                                    quota={quota}
                                    bank={bank1}
                                />
                            </TableHead>
                            <TableHead>
                                <SelectScheme
                                    setScheme={setScheme2}
                                    quota={quota}
                                    bank={bank2}
                                />
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell key={"Interest"}>Interest</TableCell>
                            <TableCell>
                                {quota ? scheme1?.senior : scheme1?.regular}
                            </TableCell>
                            <TableCell>
                                {quota ? scheme2?.senior : scheme2?.regular}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default ComparisonTable;
