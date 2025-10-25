const suryoday = {
    schemes: [
        { rate: 7.25, tenure: 3 },
        { rate: 8.05, tenure: 5 },
        { rate: 7.25, tenure: 10 },
    ],
};

//prettier-ignore
const sbi = {
    schemes: [
        {
            duration: "7 days to 45 days",
            rate: {
                regular: 3.05,
                senior: 3.55,
            },
        },
        {
            duration: "46 days to 179 days",
            rate: {
                regular: 4.90,
                senior: 5.40,
            },
        },
        {
            duration: "180 days to 210 days",
            rate: {
                regular: 5.65,
                senior: 6.15,
            },
        },
        {
            duration: "211 days to < 1 year",
            rate: {
                regular: 5.90,
                senior: 6.40,
            },
        },
        {
            duration: "1 year to < 2 year",
            rate: {
                regular: 6.25,
                senior: 6.75,
            },
        },
        {
            duration: "2 years to < 3 years",
            rate: {
                regular: 6.45,
                senior: 6.95,
            },
        },
        {
            duration: "3 years to < 5 years",
            rate: {
                regular: 6.30,
                senior: 6.80,
            },
        },
        {
            duration: "5 years to 10 years",
            rate: {
                regular: 6.05,
                senior: 7.05,
            },
        },
        {
            duration: "444 days (Amrit Vrishti)",
            rate: {
                regular: 6.60,
                senior: 7.10,
            },
        }
    ],
    lastUpdated: "15 Jul, 2025",
};

export { suryoday, sbi };
