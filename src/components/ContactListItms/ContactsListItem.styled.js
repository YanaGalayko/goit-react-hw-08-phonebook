import styled from 'styled-components';

export const ListItems = styled.li`
  display: flex;
  gap: 10px;
  width: 350px;
`;

export const ListText = styled.p`
  font-size: 20px;
  font-weight: 400;
  width: 350px;
`;

export const ListBtn = styled.button`
   background: white;
   border-radius: 8px;
   border: 1px solid transparent;
   font-size: 14px;
   font-weight: 400;
   padding: 5px 5px;

   &:hover {
    background-color: #709cb3;
    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;
    color: #e6dc55;
   }
   `;
