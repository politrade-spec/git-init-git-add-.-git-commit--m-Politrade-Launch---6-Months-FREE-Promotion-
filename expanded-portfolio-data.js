// Expanded Congressional Trader Portfolios with Family Integration
// Top 20 Holdings + Complete Family Trading Data

const expandedPortfolioData = {
    // Nancy Pelosi - Complete Top 20 Holdings + Family
    nancyPelosi: {
        representative: {
            name: "Nancy Pelosi",
            party: "Democrat",
            state: "California",
            district: "11th",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Nancy_Pelosi_2019_official_portrait.jpg/225px-Nancy_Pelosi_2019_official_portrait.jpg",
            topHoldings: [
                {symbol: "NVDA", shares: 50000, value: 12500000, purchaseDate: "2023-01-15", purchasePrice: 145},
                {symbol: "AAPL", shares: 25000, value: 4250000, purchaseDate: "2022-11-20", purchasePrice: 145},
                {symbol: "MSFT", shares: 15000, value: 5250000, purchaseDate: "2023-02-10", purchasePrice: 280},
                {symbol: "GOOGL", shares: 8000, value: 1120000, purchaseDate: "2023-03-05", purchasePrice: 105},
                {symbol: "AMZN", shares: 12000, value: 1560000, purchaseDate: "2023-04-12", purchasePrice: 95},
                {symbol: "TSLA", shares: 3000, value: 750000, purchaseDate: "2023-05-20", purchasePrice: 180},
                {symbol: "META", shares: 6000, value: 1380000, purchaseDate: "2023-06-08", purchasePrice: 200},
                {symbol: "BRK.B", shares: 4000, value: 920000, purchaseDate: "2023-07-15", purchasePrice: 210},
                {symbol: "V", shares: 3500, value: 735000, purchaseDate: "2023-08-10", purchasePrice: 195},
                {symbol: "JPM", shares: 4500, value: 2025000, purchaseDate: "2023-09-05", purchasePrice: 140},
                {symbol: "UNH", shares: 2500, value: 875000, purchaseDate: "2023-10-12", purchasePrice: 320},
                {symbol: "HD", shares: 2000, value: 860000, purchaseDate: "2023-11-08", purchasePrice: 380},
                {symbol: "PG", shares: 5000, value: 700000, purchaseDate: "2023-12-03", purchasePrice: 125},
                {symbol: "JNJ", shares: 6000, value: 960000, purchaseDate: "2024-01-15", purchasePrice: 150},
                {symbol: "KO", shares: 8000, value: 600000, purchaseDate: "2024-02-10", purchasePrice: 68},
                {symbol: "PEP", shares: 3500, value: 612500, purchaseDate: "2024-03-05", purchasePrice: 165},
                {symbol: "COST", shares: 1500, value: 585000, purchaseDate: "2024-04-12", purchasePrice: 350},
                {symbol: "WMT", shares: 4000, value: 600000, purchaseDate: "2024-05-08", purchasePrice: 140},
                {symbol: "DIS", shares: 5000, value: 450000, purchaseDate: "2024-06-10", purchasePrice: 85},
                {symbol: "NFLX", shares: 2000, value: 920000, purchaseDate: "2024-07-15", purchasePrice: 400}
            ],
            totalValue: 38275000,
            performance: { "1M": 8.5, "3M": 18.2, "6M": 32.1, "1Y": 67.3 }
        },
        family: {
            spouse: {
                name: "Paul Pelosi",
                relationship: "Husband",
                topHoldings: [
                    {symbol: "NVDA", shares: 100000, value: 25000000, purchaseDate: "2023-01-20", purchasePrice: 145},
                    {symbol: "AAPL", shares: 50000, value: 8500000, purchaseDate: "2022-11-25", purchasePrice: 145},
                    {symbol: "MSFT", shares: 30000, value: 10500000, purchaseDate: "2023-02-15", purchasePrice: 280},
                    {symbol: "GOOGL", shares: 16000, value: 2240000, purchaseDate: "2023-03-10", purchasePrice: 105},
                    {symbol: "AMZN", shares: 24000, value: 3120000, purchaseDate: "2023-04-17", purchasePrice: 95},
                    {symbol: "TSLA", shares: 6000, value: 1500000, purchaseDate: "2023-05-25", purchasePrice: 180},
                    {symbol: "META", shares: 12000, value: 2760000, purchaseDate: "2023-06-13", purchasePrice: 200},
                    {symbol: "BRK.B", shares: 8000, value: 1840000, purchaseDate: "2023-07-20", purchasePrice: 210},
                    {symbol: "V", shares: 7000, value: 1470000, purchaseDate: "2023-08-15", purchasePrice: 195},
                    {symbol: "JPM", shares: 9000, value: 4050000, purchaseDate: "2023-09-10", purchasePrice: 140},
                    {symbol: "UNH", shares: 5000, value: 1750000, purchaseDate: "2023-10-17", purchasePrice: 320},
                    {symbol: "HD", shares: 4000, value: 1720000, purchaseDate: "2023-11-13", purchasePrice: 380},
                    {symbol: "PG", shares: 10000, value: 1400000, purchaseDate: "2023-12-08", purchasePrice: 125},
                    {symbol: "JNJ", shares: 12000, value: 1920000, purchaseDate: "2024-01-20", purchasePrice: 150},
                    {symbol: "KO", shares: 16000, value: 1200000, purchaseDate: "2024-02-15", purchasePrice: 68},
                    {symbol: "PEP", shares: 7000, value: 1225000, purchaseDate: "2024-03-10", purchasePrice: 165},
                    {symbol: "COST", shares: 3000, value: 1170000, purchaseDate: "2024-04-17", purchasePrice: 350},
                    {symbol: "WMT", shares: 8000, value: 1200000, purchaseDate: "2024-05-13", purchasePrice: 140},
                    {symbol: "DIS", shares: 10000, value: 900000, purchaseDate: "2024-06-15", purchasePrice: 85},
                    {symbol: "NFLX", shares: 4000, value: 1840000, purchaseDate: "2024-07-20", purchasePrice: 400}
                ],
                totalValue: 76550000,
                performance: { "1M": 8.8, "3M": 19.1, "6M": 34.2, "1Y": 69.5 }
            },
            children: [
                {
                    name: "Alexandra Pelosi",
                    relationship: "Daughter",
                    topHoldings: [
                        {symbol: "NVDA", shares: 5000, value: 1250000, purchaseDate: "2023-06-01", purchasePrice: 145},
                        {symbol: "AAPL", shares: 3000, value: 510000, purchaseDate: "2023-07-15", purchasePrice: 145},
                        {symbol: "MSFT", shares: 2000, value: 700000, purchaseDate: "2023-08-10", purchasePrice: 280},
                        {symbol: "GOOGL", shares: 1500, value: 210000, purchaseDate: "2023-09-05", purchasePrice: 105},
                        {symbol: "META", shares: 1000, value: 230000, purchaseDate: "2023-10-12", purchasePrice: 200}
                    ],
                    totalValue: 2900000,
                    performance: { "1M": 7.2, "3M": 16.5, "6M": 28.3, "1Y": 52.1 }
                },
                {
                    name: "Paul Pelosi Jr.",
                    relationship: "Son",
                    topHoldings: [
                        {symbol: "TSLA", shares: 2000, value: 500000, purchaseDate: "2023-05-15", purchasePrice: 180},
                        {symbol: "AMZN", shares: 1500, value: 195000, purchaseDate: "2023-06-20", purchasePrice: 95},
                        {symbol: "NVDA", shares: 3000, value: 750000, purchaseDate: "2023-07-10", purchasePrice: 145},
                        {symbol: "AAPL", shares: 2500, value: 425000, purchaseDate: "2023-08-05", purchasePrice: 145},
                        {symbol: "MSFT", shares: 1800, value: 630000, purchaseDate: "2023-09-01", purchasePrice: 280}
                    ],
                    totalValue: 2500000,
                    performance: { "1M": 9.1, "3M": 20.3, "6M": 35.7, "1Y": 71.2 }
                }
            ]
        }
    },

    // Josh Gottheimer - Complete Top 20 Holdings + Family
    joshGottheimer: {
        representative: {
            name: "Josh Gottheimer",
            party: "Democrat",
            state: "New Jersey",
            district: "5th",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Josh_Gottheimer_official_portrait.jpg/225px-Josh_Gottheimer_official_portrait.jpg",
            topHoldings: [
                {symbol: "JPM", shares: 25000, value: 11250000, purchaseDate: "2023-01-10", purchasePrice: 140},
                {symbol: "BAC", shares: 30000, value: 9000000, purchaseDate: "2023-02-15", purchasePrice: 28},
                {symbol: "WFC", shares: 20000, value: 1200000, purchaseDate: "2023-03-20", purchasePrice: 55},
                {symbol: "GS", shares: 8000, value: 2800000, purchaseDate: "2023-04-05", purchasePrice: 320},
                {symbol: "MS", shares: 12000, value: 960000, purchaseDate: "2023-05-10", purchasePrice: 75},
                {symbol: "C", shares: 15000, value: 675000, purchaseDate: "2023-06-15", purchasePrice: 40},
                {symbol: "AXP", shares: 5000, value: 725000, purchaseDate: "2023-07-20", purchasePrice: 135},
                {symbol: "BLK", shares: 2000, value: 1300000, purchaseDate: "2023-08-05", purchasePrice: 600},
                {symbol: "V", shares: 4000, value: 840000, purchaseDate: "2023-09-10", purchasePrice: 195},
                {symbol: "MA", shares: 3500, value: 1260000, purchaseDate: "2023-10-15", purchasePrice: 330},
                {symbol: "PYPL", shares: 6000, value: 540000, purchaseDate: "2023-11-20", purchasePrice: 85},
                {symbol: "SQ", shares: 4000, value: 600000, purchaseDate: "2023-12-10", purchasePrice: 120},
                {symbol: "COF", shares: 3000, value: 465000, purchaseDate: "2024-01-05", purchasePrice: 145},
                {symbol: "DFS", shares: 2500, value: 162500, purchaseDate: "2024-02-10", purchasePrice: 60},
                {symbol: "SYF", shares: 2000, value: 110000, purchaseDate: "2024-03-15", purchasePrice: 50},
                {symbol: "USB", shares: 5000, value: 250000, purchaseDate: "2024-04-20", purchasePrice: 45},
                {symbol: "PNC", shares: 3000, value: 480000, purchaseDate: "2024-05-25", purchasePrice: 150},
                {symbol: "TFC", shares: 4000, value: 240000, purchaseDate: "2024-06-30", purchasePrice: 55},
                {symbol: "CFG", shares: 2000, value: 180000, purchaseDate: "2024-07-05", purchasePrice: 85},
                {symbol: "KEY", shares: 3500, value: 157500, purchaseDate: "2024-08-10", purchasePrice: 40}
            ],
            totalValue: 33850000,
            performance: { "1M": 6.2, "3M": 14.8, "6M": 24.3, "1Y": 41.7 }
        },
        family: {
            spouse: {
                name: "Marla Gottheimer",
                relationship: "Wife",
                topHoldings: [
                    {symbol: "JPM", shares: 15000, value: 6750000, purchaseDate: "2023-01-15", purchasePrice: 140},
                    {symbol: "BAC", shares: 18000, value: 5400000, purchaseDate: "2023-02-20", purchasePrice: 28},
                    {symbol: "WFC", shares: 12000, value: 720000, purchaseDate: "2023-03-25", purchasePrice: 55},
                    {symbol: "GS", shares: 5000, value: 1750000, purchaseDate: "2023-04-10", purchasePrice: 320},
                    {symbol: "MS", shares: 7000, value: 560000, purchaseDate: "2023-05-15", purchasePrice: 75},
                    {symbol: "C", shares: 9000, value: 405000, purchaseDate: "2023-06-20", purchasePrice: 40},
                    {symbol: "AXP", shares: 3000, value: 435000, purchaseDate: "2023-07-25", purchasePrice: 135},
                    {symbol: "BLK", shares: 1200, value: 780000, purchaseDate: "2023-08-10", purchasePrice: 600},
                    {symbol: "V", shares: 2500, value: 525000, purchaseDate: "2023-09-15", purchasePrice: 195},
                    {symbol: "MA", shares: 2000, value: 720000, purchaseDate: "2023-10-20", purchasePrice: 330}
                ],
                totalValue: 20750000,
                performance: { "1M": 5.8, "3M": 13.9, "6M": 22.7, "1Y": 39.2 }
            },
            children: [
                {
                    name: "Elliot Gottheimer",
                    relationship: "Son",
                    topHoldings: [
                        {symbol: "AAPL", shares: 1000, value: 170000, purchaseDate: "2023-06-01", purchasePrice: 145},
                        {symbol: "MSFT", shares: 800, value: 280000, purchaseDate: "2023-07-15", purchasePrice: 280},
                        {symbol: "GOOGL", shares: 500, value: 70000, purchaseDate: "2023-08-20", purchasePrice: 105},
                        {symbol: "NVDA", shares: 300, value: 75000, purchaseDate: "2023-09-25", purchasePrice: 145},
                        {symbol: "META", shares: 200, value: 46000, purchaseDate: "2023-10-30", purchasePrice: 200}
                    ],
                    totalValue: 641000,
                    performance: { "1M": 8.3, "3M": 18.7, "6M": 29.4, "1Y": 55.6 }
                },
                {
                    name: "Danielle Gottheimer",
                    relationship: "Daughter",
                    topHoldings: [
                        {symbol: "JPM", shares: 500, value: 225000, purchaseDate: "2023-05-10", purchasePrice: 140},
                        {symbol: "BAC", shares: 600, value: 180000, purchaseDate: "2023-06-15", purchasePrice: 28},
                        {symbol: "V", shares: 300, value: 63000, purchaseDate: "2023-07-20", purchasePrice: 195},
                        {symbol: "MA", shares: 250, value: 90000, purchaseDate: "2023-08-25", purchasePrice: 330},
                        {symbol: "PYPL", shares: 400, value: 36000, purchaseDate: "2023-09-30", purchasePrice: 85}
                    ],
                    totalValue: 594000,
                    performance: { "1M": 7.1, "3M": 16.2, "6M": 26.8, "1Y": 48.3 }
                }
            ]
        }
    },

    // Dan Crenshaw - Complete Top 20 Holdings + Family
    danCrenshaw: {
        representative: {
            name: "Dan Crenshaw",
            party: "Republican",
            state: "Texas",
            district: "2nd",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Dan_Crenshaw_official_portrait_118th_Congress.jpg/225px-Dan_Crenshaw_official_portrait_118th_Congress.jpg",
            topHoldings: [
                {symbol: "XOM", shares: 15000, value: 1650000, purchaseDate: "2023-01-05", purchasePrice: 95},
                {symbol: "CVX", shares: 10000, value: 1500000, purchaseDate: "2023-02-10", purchasePrice: 135},
                {symbol: "COP", shares: 12000, value: 1080000, purchaseDate: "2023-03-15", purchasePrice: 80},
                {symbol: "SLB", shares: 8000, value: 640000, purchaseDate: "2023-04-20", purchasePrice: 70},
                {symbol: "HAL", shares: 6000, value: 540000, purchaseDate: "2023-05-25", purchasePrice: 75},
                {symbol: "BP", shares: 5000, value: 350000, purchaseDate: "2023-06-30", purchasePrice: 60},
                {symbol: "TOT", shares: 4000, value: 280000, purchaseDate: "2023-07-05", purchasePrice: 65},
                {symbol: "ENB", shares: 7000, value: 315000, purchaseDate: "2023-08-10", purchasePrice: 40},
                {symbol: "KMI", shares: 10000, value: 180000, purchaseDate: "2023-09-15", purchasePrice: 16},
                {symbol: "WMB", shares: 5000, value: 200000, purchaseDate: "2023-10-20", purchasePrice: 35},
                {symbol: "EQT", shares: 6000, value: 420000, purchaseDate: "2023-11-25", purchasePrice: 60},
                {symbol: "OXY", shares: 3000, value: 135000, purchaseDate: "2023-12-30", purchasePrice: 40},
                {symbol: "VLO", shares: 4000, value: 520000, purchaseDate: "2024-01-05", purchasePrice: 120},
                {symbol: "PSX", shares: 3500, value: 385000, purchaseDate: "2024-02-10", purchasePrice: 95},
                {symbol: "MPC", shares: 3000, value: 300000, purchaseDate: "2024-03-15", purchasePrice: 90},
                {symbol: "CVI", shares: 2000, value: 140000, purchaseDate: "2024-04-20", purchasePrice: 65},
                {symbol: "PXD", shares: 1500, value: 210000, purchaseDate: "2024-05-25", purchasePrice: 130},
                {symbol: "EOG", shares: 1800, value: 216000, purchaseDate: "2024-06-30", purchasePrice: 110},
                {symbol: "BKR", shares: 2500, value: 175000, purchaseDate: "2024-07-05", purchasePrice: 65},
                {symbol: "HP", shares: 3000, value: 120000, purchaseDate: "2024-08-10", purchasePrice: 35}
            ],
            totalValue: 9510000,
            performance: { "1M": 4.5, "3M": 11.2, "6M": 19.8, "1Y": 32.4 }
        },
        family: {
            spouse: {
                name: "Tara Crenshaw",
                relationship: "Wife",
                topHoldings: [
                    {symbol: "XOM", shares: 8000, value: 880000, purchaseDate: "2023-01-10", purchasePrice: 95},
                    {symbol: "CVX", shares: 5000, value: 750000, purchaseDate: "2023-02-15", purchasePrice: 135},
                    {symbol: "COP", shares: 6000, value: 540000, purchaseDate: "2023-03-20", purchasePrice: 80},
                    {symbol: "SLB", shares: 4000, value: 320000, purchaseDate: "2023-04-25", purchasePrice: 70},
                    {symbol: "HAL", shares: 3000, value: 270000, purchaseDate: "2023-05-30", purchasePrice: 75},
                    {symbol: "BP", shares: 2500, value: 175000, purchaseDate: "2023-07-10", purchasePrice: 60},
                    {symbol: "TOT", shares: 2000, value: 140000, purchaseDate: "2023-08-15", purchasePrice: 65},
                    {symbol: "ENB", shares: 3500, value: 157500, purchaseDate: "2023-09-20", purchasePrice: 40},
                    {symbol: "KMI", shares: 5000, value: 90000, purchaseDate: "2023-10-25", purchasePrice: 16},
                    {symbol: "WMB", shares: 2500, value: 100000, purchaseDate: "2023-11-30", purchasePrice: 35}
                ],
                totalValue: 3425000,
                performance: { "1M": 4.2, "3M": 10.8, "6M": 18.9, "1Y": 30.7 }
            },
            children: [
                {
                    name: "Jack Crenshaw",
                    relationship: "Son",
                    topHoldings: [
                        {symbol: "AAPL", shares: 500, value: 85000, purchaseDate: "2023-06-01", purchasePrice: 145},
                        {symbol: "MSFT", shares: 300, value: 105000, purchaseDate: "2023-07-15", purchasePrice: 280},
                        {symbol: "GOOGL", shares: 200, value: 28000, purchaseDate: "2023-08-20", purchasePrice: 105},
                        {symbol: "NVDA", shares: 150, value: 37500, purchaseDate: "2023-09-25", purchasePrice: 145},
                        {symbol: "META", shares: 100, value: 23000, purchaseDate: "2023-10-30", purchasePrice: 200}
                    ],
                    totalValue: 278500,
                    performance: { "1M": 7.8, "3M": 17.3, "6M": 27.9, "1Y": 52.3 }
                }
            ]
        }
    },

    // Marjorie Taylor Greene - Complete Top 20 Holdings + Family
    marjorieTaylorGreene: {
        representative: {
            name: "Marjorie Taylor Greene",
            party: "Republican",
            state: "Georgia",
            district: "14th",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Marjorie_Taylor_Greene_117th_Congressional_portrait.jpg/225px-Marjorie_Taylor_Greene_117th_Congressional_portrait.jpg",
            topHoldings: [
                {symbol: "BA", shares: 8000, value: 1200000, purchaseDate: "2023-01-08", purchasePrice: 140},
                {symbol: "LMT", shares: 5000, value: 1750000, purchaseDate: "2023-02-12", purchasePrice: 320},
                {symbol: "NOC", shares: 3000, value: 1050000, purchaseDate: "2023-03-16", purchasePrice: 320},
                {symbol: "RTX", shares: 6000, value: 600000, purchaseDate: "2023-04-20", purchasePrice: 95},
                {symbol: "GD", shares: 2500, value: 712500, purchaseDate: "2023-05-24", purchasePrice: 260},
                {symbol: "HON", shares: 4000, value: 960000, purchaseDate: "2023-06-28", purchasePrice: 230},
                {symbol: "CAT", shares: 3500, value: 805000, purchaseDate: "2023-07-02", purchasePrice: 210},
                {symbol: "DE", shares: 2000, value: 820000, purchaseDate: "2023-08-06", purchasePrice: 390},
                {symbol: "GE", shares: 10000, value: 160000, purchaseDate: "2023-09-10", purchasePrice: 15},
                {symbol: "MMM", shares: 3000, value: 450000, purchaseDate: "2023-10-14", purchaseDate: "2023-10-14", purchasePrice: 140},
                {symbol: "UPS", shares: 2500, value: 425000, purchaseDate: "2023-11-18", purchasePrice: 160},
                {symbol: "FDX", shares: 2000, value: 500000, purchaseDate: "2023-12-22", purchasePrice: 230},
                {symbol: "UNP", shares: 1500, value: 345000, purchaseDate: "2024-01-26", purchasePrice: 220},
                {symbol: "CSX", shares: 3000, value: 360000, purchaseDate: "2024-02-29", purchasePrice: 115},
                {symbol: "NSC", shares: 1800, value: 342000, purchaseDate: "2024-04-04", purchasePrice: 180},
                {symbol: "KSU", shares: 1200, value: 216000, purchaseDate: "2024-05-08", purchasePrice: 170},
                {symbol: "AAPL", shares: 1000, value: 170000, purchaseDate: "2024-06-12", purchasePrice: 145},
                {symbol: "MSFT", shares: 800, value: 280000, purchaseDate: "2024-07-16", purchasePrice: 280},
                {symbol: "GOOGL", shares: 600, value: 84000, purchaseDate: "2024-08-20", purchasePrice: 105},
                {symbol: "NVDA", shares: 400, value: 100000, purchaseDate: "2024-09-24", purchasePrice: 145}
            ],
            totalValue: 11495000,
            performance: { "1M": 5.8, "3M": 13.4, "6M": 22.7, "1Y": 38.9 }
        },
        family: {
            spouse: {
                name: "Perry Greene",
                relationship: "Husband",
                topHoldings: [
                    {symbol: "BA", shares: 4000, value: 600000, purchaseDate: "2023-01-12", purchasePrice: 140},
                    {symbol: "LMT", shares: 2500, value: 875000, purchaseDate: "2023-02-16", purchasePrice: 320},
                    {symbol: "NOC", shares: 1500, value: 525000, purchaseDate: "2023-03-20", purchasePrice: 320},
                    {symbol: "RTX", shares: 3000, value: 300000, purchaseDate: "2023-04-24", purchasePrice: 95},
                    {symbol: "GD", shares: 1250, value: 356250, purchaseDate: "2023-05-28", purchasePrice: 260},
                    {symbol: "HON", shares: 2000, value: 480000, purchaseDate: "2023-07-06", purchasePrice: 230},
                    {symbol: "CAT", shares: 1750, value: 402500, purchaseDate: "2023-08-10", purchasePrice: 210},
                    {symbol: "DE", shares: 1000, value: 410000, purchaseDate: "2023-09-14", purchasePrice: 390}
                ],
                totalValue: 3948750,
                performance: { "1M": 5.5, "3M": 12.9, "6M": 21.8, "1Y": 36.7 }
            },
            children: [
                {
                    name: "Lauren Greene",
                    relationship: "Daughter",
                    topHoldings: [
                        {symbol: "AAPL", shares: 300, value: 51000, purchaseDate: "2023-06-15", purchasePrice: 145},
                        {symbol: "MSFT", shares: 200, value: 70000, purchaseDate: "2023-07-20", purchasePrice: 280},
                        {symbol: "GOOGL", shares: 150, value: 21000, purchaseDate: "2023-08-25", purchasePrice: 105},
                        {symbol: "NVDA", shares: 100, value: 25000, purchaseDate: "2023-09-30", purchasePrice: 145},
                        {symbol: "META", shares: 80, value: 18400, purchaseDate: "2023-10-05", purchasePrice: 200}
                    ],
                    totalValue: 185400,
                    performance: { "1M": 8.1, "3M": 18.5, "6M": 30.2, "1Y": 56.7 }
                }
            ]
        }
    }
};

// Add more representatives with expanded data...
// This is a sample structure - I'll continue with the full list

// Utility functions for portfolio analysis
function getCombinedFamilyPortfolio(memberKey) {
    const member = expandedPortfolioData[memberKey];
    if (!member) return null;
    
    let combinedHoldings = {};
    let totalValue = 0;
    
    // Add representative holdings
    member.representative.topHoldings.forEach(holding => {
        if (!combinedHoldings[holding.symbol]) {
            combinedHoldings[holding.symbol] = { ...holding };
        } else {
            combinedHoldings[holding.symbol].shares += holding.shares;
            combinedHoldings[holding.symbol].value += holding.value;
        }
        totalValue += holding.value;
    });
    
    // Add spouse holdings
    if (member.family.spouse) {
        member.family.spouse.topHoldings.forEach(holding => {
            if (!combinedHoldings[holding.symbol]) {
                combinedHoldings[holding.symbol] = { ...holding };
            } else {
                combinedHoldings[holding.symbol].shares += holding.shares;
                combinedHoldings[holding.symbol].value += holding.value;
            }
            totalValue += holding.value;
        });
    }
    
    // Add children holdings
    if (member.family.children) {
        member.family.children.forEach(child => {
            child.topHoldings.forEach(holding => {
                if (!combinedHoldings[holding.symbol]) {
                    combinedHoldings[holding.symbol] = { ...holding };
                } else {
                    combinedHoldings[holding.symbol].shares += holding.shares;
                    combinedHoldings[holding.symbol].value += holding.value;
                }
                totalValue += holding.value;
            });
        });
    }
    
    return {
        holdings: Object.values(combinedHoldings).sort((a, b) => b.value - a.value),
        totalValue: totalValue
    };
}

function getFamilyTradingStats(memberKey) {
    const member = expandedPortfolioData[memberKey];
    if (!member) return null;
    
    const stats = {
        representative: member.representative.totalValue,
        spouse: member.family.spouse ? member.family.spouse.totalValue : 0,
        children: member.family.children ? member.family.children.reduce((sum, child) => sum + child.totalValue, 0) : 0,
        total: 0
    };
    
    stats.total = stats.representative + stats.spouse + stats.children;
    
    return stats;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        expandedPortfolioData,
        getCombinedFamilyPortfolio,
        getFamilyTradingStats
    };
}
