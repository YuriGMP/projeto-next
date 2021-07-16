import styled from 'styled-components'

export const Container = styled.header`
    background-color: blue;
    color: white;
    
    display: flex;
    align-items: center;
    justify-content: center;

    .content-header {
        background-color: #0000ff;
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
    gap: 10px;
}
`