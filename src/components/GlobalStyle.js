import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}

button {
    font-weight: bold;
    font-size:1.1rem;
    background-color: #1b1b1b;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    color: white;
    font-family: 'Inter', sans-serif;
    transition: all 0.5s ease;
    
    &:hover{
        background-color: #23d997;
        color: white;
    }
   
}

h2 {
    font-weight: lighter;
    font-size: 4rem,;
}

h3 {
    color: white;
}

h4 {
    font-weight: bold;
    font-size: 2.2rem;
}

a{
    font-size: 1.1rem;
}

span {
    font-weight: bold;
    color: #23d997;
}

p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.1rem;
    line-height: 150%;

}

html {
    @media (max-width: 800px){
        font-size:60%;
    }
}

`;

export default GlobalStyle;
