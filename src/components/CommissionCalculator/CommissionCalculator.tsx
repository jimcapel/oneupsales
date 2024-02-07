import { useState } from "react";
import calculateCommissionBands from "../../utils/calculateCommissionBands";
import * as Styled from "./CommissionCalculator.styled";

const CommissionCalculator = () => {
    const [revenueInput, setRevenueInput] = useState<number>(0);
    const [revenue, setRevenue] = useState(0);

    const { total, bands } = calculateCommissionBands(revenue);

    return (
        <Styled.Wrapper>
            <Styled.ColumnWrapper>
                <Styled.TotalCommissionWrapper>
                    <h2>Total commission</h2>
                    <Styled.TotalRevenueText>
                        £{total.toLocaleString()}
                    </Styled.TotalRevenueText>
                </Styled.TotalCommissionWrapper>
                <div>
                    <Styled.Subtext>
                        Enter your revenue earned below to calculate your total
                        commission.
                    </Styled.Subtext>
                    <Styled.InputWrapper>
                        <Styled.Input
                            placeholder="Enter your revenue"
                            type="number"
                            onChange={(e) => {
                                const newValue = Number(e.target.value);
                                setRevenueInput(newValue);
                            }}
                        />
                        <Styled.Button
                            onClick={() => {
                                setRevenue(revenueInput);
                            }}
                        >
                            Submit!
                        </Styled.Button>
                    </Styled.InputWrapper>
                </div>
            </Styled.ColumnWrapper>

            {/* if there is a revenue input, iterate over all bands and display the breakdown */}
            {revenue > 0 ? (
                <Styled.BreakdownWrapper>
                    <div> Your commission breakdown:</div>
                    {bands.map((band) => (
                        <Styled.BandBreakdown key={band.id}>
                            £{band.commission.toLocaleString()} from £
                            {band.start.toLocaleString()}
                            {band.end !== Infinity
                                ? ` → £${band.end.toLocaleString()} `
                                : "+ "}
                            with {band.percentage * 100}% commission.
                        </Styled.BandBreakdown>
                    ))}
                </Styled.BreakdownWrapper>
            ) : null}
        </Styled.Wrapper>
    );
};

export default CommissionCalculator;
