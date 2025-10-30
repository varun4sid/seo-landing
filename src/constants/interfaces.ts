export interface amountState {
    amount: number;
    setAmount: (val: number) => void;
}

export interface Scheme {
    rate: number;
    tenure: number;
}

export interface selectSchemeProps {
    setScheme: (val: number) => void;
    setQuota: (val: boolean) => void;
    quota: boolean;
}

export interface FaqPair {
    question: string;
    answer: string;
}

export interface SchemeTerms {
    bankName: string;
    rate: {
        regular: number;
        senior: number;
    };
    tenure: number;
    account_required: boolean;
    dicgc_insured: boolean;
}
