import calculateCommissionBands from "../utils/calculateCommissionBands";

test("When revenue equals 18000, total should be 1850", () => {
    const { total } = calculateCommissionBands(18000);

    expect(total).toBe(1850);
});

test("When revenue is 0, total should be 0", () => {
    const { total } = calculateCommissionBands(0);

    expect(total).toBe(0);
});

test("When revenue is -1 (negative), total should be 0", () => {
    const { total } = calculateCommissionBands(-1);

    expect(total).toBe(0);
});
