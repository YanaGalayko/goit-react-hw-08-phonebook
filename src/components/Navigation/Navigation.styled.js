import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
font-size: 28px;
font-weight: 600;
color: white;
border-bottom: 5px double white;
margin-left: 30px;

&.active {
   color: #e6dc55;
   border-bottom: 5px double #e6dc55;
}
`;