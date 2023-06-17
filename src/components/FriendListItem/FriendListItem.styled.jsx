import styled from '@emotion/styled';


export const Item = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
  box-shadow: -1px 10px 24px 1px rgba(34, 60, 80, 0.16);
  margin-bottom: 8px;
  padding: 8px;
  width: 250px;
  margin: 0 auto;
`;
export const StatusTrue = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: green;
`;

export const StatusFalse = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
`;

export const Avatar = styled.img`
  width: 48px;
  
`;
export const Name = styled.p`
  font-size: 18px;
`;

