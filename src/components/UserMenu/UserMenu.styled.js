import { styled } from "styled-components";

export const UserContainer = styled.div`
display: flex;
`;

export const Title = styled.p`
color: white;
padding-right: 20px;
`;

export const LogOutBtn = styled.button`
background-color: #fff;
border: 1px solid #d5d9d9;
border-radius: 8px;
box-shadow: 0 2px 5px 0 hsla(180,5%,84%,.5);
box-sizing: border-box;
color: #0f1111;
cursor: pointer;
display: inline-block;
font-size: 18px;
line-height: 29px;

padding: 0 10px 0 11px;
text-align: center;
text-decoration: none;
width: 100px;

    &:hover {
    background-color: #226487;
    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;
    color: #e6dc55;
}
`;