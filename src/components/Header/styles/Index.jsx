import styled from "@emotion/styled";

export const Div = styled.header`
header{
position: fixed;
z-index: 999;
top: 0;
left: 0;
right: 0;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
background: transparent;
transition: all ease 0.5s;

.Header-Logo{
    height: 100px;
}
.Header-Avatar{
    height:50px;
    margin: 10px;
}
}
.header-scroll{
    background-color: #141414;
}
`;
