import React from 'react';
import  styled  from 'styled-components';

const Title=styled.h1`
    color: blue;
    font-size: 20px;
`;

const Header = () => (
    <header>
        <Title>
            Site teste
        </Title>
    </header>
);

export default Header;