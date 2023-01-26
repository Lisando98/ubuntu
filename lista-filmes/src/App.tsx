import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import Movie from './components/movie'
import './App.css';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


export default function App() {
  return (
    <div>
      <Title>Aula FrontEnd</Title>
      <ul>
        <li>
          <Movie></Movie>
        </li>
      </ul>
    </div>
  );
}
