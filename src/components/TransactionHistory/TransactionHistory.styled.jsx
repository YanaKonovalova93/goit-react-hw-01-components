import styled from '@emotion/styled';

export const TransactionHistoryEl = styled.table`
  text-align: center;
  padding: 15px;
  border-radius: 4px;
  background-color: rgba(236, 210, 170, 0.636);
  margin: 0 auto;
`;
  
export const Thead = styled.thead`
  text-align: center;
  background-color: rgba(15, 130, 130, 0.596);
 
`;

export const Tr = styled.tr`
  font-size: 12px;
  text-align: center;

  :nth-of-type(2n + 1) {
    background-color: rgba(236, 210, 170, 0.636);
  }
`;

export const Th = styled.th`
  font-size: 12px;
  text-align: center;
  padding: 8px;
  padding: 12px 50px;
`;
export const Tbody = styled.tbody`
  font-size: 15px;
  text-align: center;
  background-color: rgba(146, 232, 232, 0.596);
`;


export const Td = styled.td`
  font-size: 15px;
  text-align: center;
  padding: 5px;
`;