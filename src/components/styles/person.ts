import styled from 'styled-components'


export const Person = styled.p`
    display: inline-block;
    color: #fff;
    height: 25px;
    min-width: 20%;
    max-width: 60%;
    padding: 20px;
    text-align: center;
    vertical-align: middle;
    border-radius: 30px;
    &.first-person {
        background: rgb(0, 173, 231);
    }
    &.second-person {
        background: #06c406;
        float: right;
    }
`