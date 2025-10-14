export function getReturns(
    amount: number,
    rate: number,
    tenure: number
): { return: number; maturity: number } {
    const n = 4; //compounding rate (per year)
    const maturity = amount * Math.pow(1 + rate / (100 * n), n * tenure);
    return {
        maturity,
        return: amount + maturity,
    };
}
