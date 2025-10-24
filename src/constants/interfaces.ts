export interface amountState {
    amount: number;
    setAmount: (val: number) => void;
}

export interface Scheme {
    rate: number;
    tenure: number;
}

export interface schemeState {
    setScheme: (val: number) => void;
}

export interface FaqPair {
    question: string;
    answer: string;
}
