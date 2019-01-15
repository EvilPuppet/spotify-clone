import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    tranform: rotate(0deg);
  }

  to {
    tranform: rotate(360deg);
  }
`;

export const Spinner = styled.img`
  animation: ${rotate360} 2s linear infinite;
`;
