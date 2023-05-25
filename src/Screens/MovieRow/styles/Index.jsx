import styled from '@emotion/styled';

export const MovieRowStyle = styled.div`
margin-bottom: 200px;
margin-top: -90px;

&:hover .arrow-left{
opacity: 1;
transition: all ease 0.5s;

}

&:hover .arrow-right{
opacity: 1;
transition: all ease 0.5s;

}


h2{
    margin: 0px 0px 0px 30px;
}

.arrow-left{
left: 0;
cursor: pointer;
opacity: 0;
}


.arrow-right{
right: 0;
cursor: pointer;
opacity: 0;

}


`;

export const MovieRowArea = styled.div`
    overflow: hidden;
    padding-left: 30px;
    
`;

export const MovieRowList = styled.div`
width: 9999px;

img{
    display: inline-block;
    width: 150px;
    max-width: 100%;
    transform: scale(0.9);
    cursor: pointer;

    &:hover{
        transform: scale(1.0);
        transition: all ease 0.2s;
    }
}

div{
    transition: all ease 0.5s;
}
`;

export const Scroll = styled.div`
display: flex;
justify-content: space-between;

div{
position: absolute;
width: 37px;
height: 225px;
background-color: rgba(0,0,0,0.6);
z-index: 1;
display: flex;
align-items:center;


}


`;


