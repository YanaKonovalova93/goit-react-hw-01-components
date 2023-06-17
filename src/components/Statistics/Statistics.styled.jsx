import styled from '@emotion/styled';
import {getRandomHexColor} from './StatisticsColor'


export const StatisticsDiv = styled.section`
  padding: 15px;
  border-radius: 4px;
  background-color: rgba(236, 210, 170, 0.636);
  margin-top: 20px;
`;
export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
`;
export const StatList = styled.ul`
  display: flex;
  
  margin: 8px 0 0;
  padding: 0;
  justify-content: center;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  background-color: ${getRandomHexColor};
  padding: 6px;
  color: beige;
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Percentage = styled.span`
  font-size: 18px;
`;