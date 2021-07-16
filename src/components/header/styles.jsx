import styled from 'styled-components'

export const Container = styled.header`
    background-color: ${ props => props.theme.backgrounds.secondary };
    color: ${ props => props.theme.colors.primary };
    
    display: flex;
    align-items: center;
    justify-content: center;

    .content-header {
        width: 100%;
        max-width: 690px;
        padding: 0px 15px ;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Nav = styled.nav`

ul {
    display: flex;
    flex-direction: row;
    gap: 10px;

    & :hover {
        color:red;
        transition: all 
    }
}
`