import styled from "styled-components";

const GridLocal = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);

`;



export default function Grid(){
    return(
        <GridLocal></GridLocal>
    );
}