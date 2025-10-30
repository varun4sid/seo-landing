export function getReturns(
    amount: number,
    rate: number,
    tenure: number
): { maturity: string; gains: string } {
    const n = 4; //compounding rate (per year)
    let gains = amount * Math.pow(1 + rate / (100 * n), n * tenure);
    gains -= amount;

    return {
        gains: Number(gains.toFixed()).toLocaleString("en-IN"),
        maturity: Number((amount + gains).toFixed()).toLocaleString("en-IN"),
    };
}
