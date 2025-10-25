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
                            <TableCell>{scheme.rate.regular + "%"}</TableCell>
                            <TableCell>{scheme.rate.senior + "%"}</TableCell>
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
