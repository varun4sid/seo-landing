const suryoday = {
    bankName: "Suryoday",
    schemes: [
        {
            tenure: 1,
            duration: "",
            rate: {
                regular: 7.40,
                senior: 7.60,
            },
        },
        {
            tenure: 2,
            duration: "",
            rate: {
                regular: 7.25,
                senior: 7.45,
            },
        },
        {
            tenure: 3,
            duration: "",
            rate: {
                regular: 7.25,
                senior: 7.45,
            },
        },
        {
            tenure: 5,
            duration: "",
            rate: {
                regular: 8.05,
                senior: 8.10,
            },
        },
    ],
    lastUpdated: "08 Oct, 2025",
    dicgc_insured: true,
    account_required: false,
};

const sbi = {
    bankName: "SBI",
    schemes: [
        {
            tenure: 0,
            duration: "7 days to 45 days",
            rate: {
                regular: 3.05,
                senior: 3.55,
            },
        },
        {
            tenure: 0,
            duration: "46 days to 179 days",
            rate: {
                regular: 4.90,
                senior: 5.40,
            },
        },
        {
            tenure: 0,
            duration: "180 days to 210 days",
            rate: {
                regular: 5.65,
                senior: 6.15,
            },
        },
        {
            tenure: 0,
            duration: "211 days to < 1 year",
            rate: {
                regular: 5.90,
                senior: 6.40,
            },
        },
        {
            tenure: 1,
            duration: "1 year to < 2 year",
            rate: {
                regular: 6.25,
                senior: 6.75,
            },
        },
        {
            tenure: 2,
            duration: "2 years to < 3 years",
            rate: {
                regular: 6.45,
                senior: 6.95,
            },
        },
        {
            tenure: 3,
            duration: "3 years to < 5 years",
            rate: {
                regular: 6.30,
                senior: 6.80,
            },
        },
        {
            tenure: 5,
            duration: "5 years to 10 years",
            rate: {
                regular: 6.05,
                senior: 7.05,
            },
        },
        {
            tenure: 0,
            duration: "444 days (Amrit Vrishti)",
            rate: {
                regular: 6.60,
                senior: 7.10,
            },
        },
    ],
    lastUpdated: "15 Jul, 2025",
    dicgc_insured: true,
    account_required: true,
};

const sfBanks = [suryoday,sbi];

export { suryoday, sbi, sfBanks };
