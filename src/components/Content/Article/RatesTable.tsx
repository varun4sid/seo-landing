import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { sbi } from "@/constants/db";

function RatesTable() {
    return (
        <div id="rate-table">
            <h4 className="font-bold mb-1.5">Interest Rates</h4>
            <Table>
                <TableHeader className="font-bold">
                    <TableRow>
                        <TableHead>Tenure</TableHead>
                        <TableHead>Regular Rate</TableHead>
                        <TableHead>Senior Rate</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sbi.schemes.map((scheme) => (
                        <TableRow>
                            <TableCell>{scheme.duration}</TableCell>
                            <TableCell>
                                {scheme.rate.regular.toFixed(2) + "%"}
                            </TableCell>
                            <TableCell>
                                {scheme.rate.senior.toFixed(2) + "%"}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <p>Last Updated : {sbi.lastUpdated}</p>
                </TableFooter>
            </Table>
        </div>
    );
}

export default RatesTable;
