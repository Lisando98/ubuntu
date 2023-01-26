
import styled from 'styled-components';

const Box = styled.div`
    height: 300px;
    width: 150px;
    border-radius: 1rem;
    background-color: #000000;
    display: block;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0Cp9FJnN2PZ9RHFQGQq6giydAp6e0bwLfQ&usqp=CAU");
    background-size: cover;
    text-align: center;
`;

const MovieTitle = styled.span` 
    color: white;
    margin-top: 290px;
`;

export default function Movie(){
    return (
        <div>
            <Box>
                <MovieTitle>Titulo do Filme</MovieTitle>
            </Box>
        </div>


    );
}