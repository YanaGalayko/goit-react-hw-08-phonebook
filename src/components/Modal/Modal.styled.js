import { styled } from "styled-components";

export const ModalBox = styled.div`
width: 380px;
height: 100%;
padding: 30px;
border: 2px solid black;
border-radius: 10px;
`;

export const ModalBtn = styled.button`
  background: rgb(114, 148, 166);
   border-radius: 8px;
   border: 2px solid black;
   font-size: 15px;
   font-weight: 400;
   padding: 10px;
   width: 120px;
   font-weight: 500;

   &:hover {
    background-color: #226487;
    box-shadow: 0 0 6px #008296, 0 0 12px #00b2b2, 0 0 30px #008296;
    color: #e6dc55;
}
`;

export const ModalBtnBox = styled.div`
display: flex;
justify-content: center;
gap: 50px;
`;
