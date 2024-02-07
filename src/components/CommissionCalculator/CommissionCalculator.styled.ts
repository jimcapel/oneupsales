import styled from "styled-components";

export const Wrapper = styled.div`
    width: fit-content;
    display: flex;

    background-color: #ffffff;
    flex-direction: row;
    border-color: #e0e3e7;
    border-width: 2px;
    border-style: solid;
    padding-right: 32px;
    padding-left: 32px;
    border-radius: 16px;
    align-items: center;
`;

export const TotalRevenueText = styled.h1`
    color: #4065ff;
`;

export const Subtext = styled.div`
    margin-bottom: 16px;
    text-align: center;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    background-color: #4065ff;
    padding: 4px;
    border: none;
    color: #ffffff;
    border-radius: 6px;
`;

export const TotalCommissionWrapper = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    align-items: center;
    justify-content: center;
    padding-bottom: 32px;
`;

export const Input = styled.input`
    margin-right: 8px;
    padding: 4px;
    width: 60%;
`;

export const BreakdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    margin-bottom: 16px;
    justify-content: center;
    margin-left: 16px;
`;

export const BandBreakdown = styled.div`
    margin-top: 8px;
    margin-bottom: 8px;
`;
