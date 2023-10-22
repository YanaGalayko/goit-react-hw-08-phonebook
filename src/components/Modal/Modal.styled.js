import { styled } from "styled-components";

export const ModalBox = styled.div`
width: 400px;
height: 100%;
padding: 30px;
border: 2px solid black;
border-radius: 10px;
`;

export const ModalBtn = styled.button`
  background: #ADD8E6;
   border-radius: 8px;
   border: 2px solid black;
   font-size: 15px;
   font-weight: 400;
   padding: 10px;
   width: 70px;

   &:hover {
    background: #87CEEB;
   }

   &:focus {
    background: #87CEEB;
   }
`;

export const ModalBtnBox = styled.div`
display: flex;
justify-content: center;
gap: 50px;

`;