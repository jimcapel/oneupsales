import { CommissionBands, CommissionBandsBase } from "../types";

const COMMISSION_BANDS: CommissionBandsBase[] = [
    { id: "4", start: 20000, end: Infinity, percentage: 0.25 },
    { id: "3", start: 15000, end: 20000, percentage: 0.2 },
    { id: "2", start: 10000, end: 15000, percentage: 0.15 },
    { id: "1", start: 5000, end: 10000, percentage: 0.1 },
    { id: "0", start: 0, end: 5000, percentage: 0 },
];

//  In a production environment, the data this function returns would come from a backend
const calculateCommissionBands = (revenue: number) => {
    const bands: CommissionBands[] = [];
    let total = 0;

    for (const band of COMMISSION_BANDS) {
        //   if band does not include revenue
        if (revenue < band.start) {
            bands.push({
                commission: 0,
                revenue: 0,
                ...band,
            });
            // if revenue exceeds the band
        } else if (revenue > band.end) {
            const bandTotal = (band.end - band.start) * band.percentage;

            total += bandTotal;
            bands.push({
                commission: bandTotal,
                revenue: band.end - band.start,
                ...band,
            });
            // if revenue is within the band range
        } else {
            const bandTotal = (revenue - band.start) * band.percentage;

            total += bandTotal;
            bands.push({
                revenue: revenue - band.start,
                commission: bandTotal,
                ...band,
            });
        }
    }

    return { total, bands: bands };
};

export default calculateCommissionBands;
