//styled
import styled from "styled-components";

//styled components
export const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export const Describtion = styled.div`
    padding-right: 5rem;
    flex: 1;
    h2 {
        font-weight: bold;
    }
`;

export const Image = styled.div`
    overflow: hidden;
    flex: 1;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;
