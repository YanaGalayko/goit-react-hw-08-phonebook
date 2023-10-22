import { styled } from "styled-components";

export const Form = styled.form`
width: 450px;
background: white;
margin-left: auto;  
margin-right: auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, inset 14px 14px 15px 11px rgba(255,255,255,0);
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 20px;
color: rgba(0, 0, 0, 0.6);
font-weight: 800;
font-size: 1rem;
line-height: 1.4375em;
`;

export const Input = styled.input`
width: 350px;
padding: 10px;
border: 1px solid #d5d9d9;
border-radius: 8px;
margin-top: 6px;
`;

export const RegisterBtn = styled.button`
border: 1px solid #d5d9d9;
border-radius: 8px;
box-shadow: 0 2px 5px 0 hsla(180,5%,84%,.5);
box-sizing: border-box;
color: white;
cursor: pointer;
background: rgb(34, 100, 135);
display: inline-block;
line-height: 29px;
padding: 10px;
text-align: center;
text-decoration: none;
width: 200px;
font-size: 21px;
margin-top: 20px;

    &:hover {
    background-color: #226487;
    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;
    color: #e6dc55;
}
`;