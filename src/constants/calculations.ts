export function getReturns(
    amount: number,
    rate: number,
    tenure: number
): { return: number; maturity: number } {
    const n = 4; //compounding rate (per year)
    let maturity = amount * Math.pow(1 + rate / (100 * n), n * tenure);
    maturity -= amount;

    return {
        maturity: Number(maturity.toFixed()),
        return: Number((amount + maturity).toFixed()),
    };
}
