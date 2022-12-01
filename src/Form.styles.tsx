import styled, { css } from 'styled-components';

export const MainLabel = styled.label`
  margin: 16px 0;
  display: block;
  text-transform: uppercase;
  font-weight: 700;
`;

export const Label = styled.label`
  margin: 8px 0;
  display: block;
`;

export const Error = styled.p`
  margin: 8px 0;
  display: block;
  color: #e97777;
`;

export const Input = styled.input<{ hasError: boolean }>`
  background-color: #eff5f5;
  color: #393e46;
  border: 1px solid #b2b2b2;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 6px;
  &:focus {
    background-color: #d6e4e5;
    outline: 4px solid #f2e7d5;
  }
  ${({ hasError }) =>
    hasError &&
    css`
      border: 1px solid #e97777;
    `}
`;

export const Button = styled.button`
  background-color: #497174;
  color: white;
  border: 0;
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  margin: 8px 0;
  &:focus {
    outline: 4px solid #f2e7d5;
  }
`;
