export type CommissionBandsBase = {
    id: string;
    start: number;
    end: number;
    percentage: number;
};

export type CommissionBands = CommissionBandsBase & {
    commission: number;
    revenue: number;
};
