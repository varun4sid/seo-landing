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
import { useEffect, useState } from "react";
import SelectBank from "./SelectBank";
import SelectScheme from "./SelectScheme";
import type { SchemeTerms } from "@/constants/interfaces";
import { getReturns } from "@/constants/calculations";
import TickIcon from "@/components/ui/TickIcon";
import CrossIcon from "@/components/ui/CrossIcon";

function ComparisonTable() {
    const [amount, setAmount] = useState(100000);
    const [quota, setQuota] = useState(false);
    const [bank1, setBank1] = useState("SBI");
    const [bank2, setBank2] = useState("");
    const [scheme1, setScheme1] = useState<SchemeTerms | null>();
    const [scheme2, setScheme2] = useState<SchemeTerms | null>();

    const rate1 = scheme1
        ? quota
            ? scheme1.rate.senior
            : scheme1.rate.regular
        : "-";
    const rate2 = scheme2
        ? quota
            ? scheme2.rate.senior
            : scheme2.rate.regular
        : "-";

    const yield1 =
        rate1 !== "-"
            ? scheme1
                ? getReturns(amount, rate1, scheme1.tenure)
                : "-"
            : "-";

    const yield2 =
        rate2 !== "-"
            ? scheme2
                ? getReturns(amount, rate2, scheme2.tenure)
                : "-"
            : "-";

    const gains1 = yield1 !== "-" ? yield1.gains : "-";
    const gains2 = yield2 !== "-" ? yield2.gains : "-";

    const maturity1 = yield1 !== "-" ? yield1.maturity : "-";
    const maturity2 = yield2 !== "-" ? yield2.maturity : "-";

    useEffect(() => {
        setScheme1(null);
    }, [bank1]);

    useEffect(() => {
        setScheme2(null);
    }, [bank2]);

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
                            <TableCell>Gains</TableCell>
                            <TableCell>{gains1}</TableCell>
                            <TableCell>{gains2}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Maturity</TableCell>
                            <TableCell>{maturity1}</TableCell>
                            <TableCell>{maturity2}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Account Required</TableCell>
                            <TableCell>
                                {scheme1 ? (
                                    scheme1.account_required ? (
                                        <TickIcon />
                                    ) : (
                                        <CrossIcon />
                                    )
                                ) : (
                                    "-"
                                )}
                            </TableCell>
                            <TableCell>
                                {scheme2 ? (
                                    scheme2.account_required ? (
                                        <TickIcon />
                                    ) : (
                                        <CrossIcon />
                                    )
                                ) : (
                                    "-"
                                )}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>DICGC Insured</TableCell>
                            <TableCell>
                                {scheme1 ? (
                                    scheme1.dicgc_insured ? (
                                        <TickIcon />
                                    ) : (
                                        <CrossIcon />
                                    )
                                ) : (
                                    "-"
                                )}
                            </TableCell>
                            <TableCell>
                                {scheme2 ? (
                                    scheme2.dicgc_insured ? (
                                        <TickIcon />
                                    ) : (
                                        <CrossIcon />
                                    )
                                ) : (
                                    "-"
                                )}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default ComparisonTable;
