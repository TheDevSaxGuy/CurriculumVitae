import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
color: #757575;
font-family:'Roboto',sans-serif;

font-weight:300;
margin: 0.5em 0 1.2em 0;`;

const Pstyled = ({name})=> <StyledP>{name}</StyledP>

export default Pstyled;