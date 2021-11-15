import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';

const Imagem = styled.Image`
  width: 180;
  height: 180;
  backgroundColor: #AAA;
`;

const ImagemRetangular = styled.Image`
  width: 380;
  height: 180;
  backgroundColor: #AAA;
`;

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 200px;
  height: 200px;
  justify-content:center;
  align-items:center;
`;

const Retangulo = styled.View`
  background-color: ${props => props.cor};
  width: 400px;
  height: 200px;
  justify-content:center;
  align-items:center;
`;

const Pagina = styled.View`
  background-color: #74E1ED;
  align-items:center;
  flex:1;
`;

const Header = styled.View`
  flex-direction: row;
  /*background-color:#DDD;*/
  height:500px;
  flex-wrap:wrap;
  justify-content:center;
`;

const Texto = styled.Text`
  font-size: ${props => props.t};
  font-family: 'helvetica';
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bottom};
`;


export default function App() {
  return (
    <Pagina>
      <Texto t="20" top="50">Galeria de imagens de</Texto>
      <Texto t="40">Iglisson Ruan</Texto>
      <Texto t="30" bottom="50">Tema da Galeria: Os Ovos</Texto>

      <Header>

        {/* imagens internas */}
        <Quadrado cor="#5BB1BA">
          <Imagem source = {require('./src/images/osovos0.jpeg')} resizeMode="cover"/>
        </Quadrado>

        <Quadrado cor="#5BB1BA">
          <Imagem source = {require('./src/images/osovos1.jpeg')} resizeMode='cover' />
        </Quadrado>

        <Quadrado cor="#5BB1BA">
          <Imagem source = {require('./src/images/osovos2.jpeg')} resizeMode='cover' />
        </Quadrado>

        <Quadrado cor="#5BB1BA">
          <Imagem source = {require('./src/images/osovos3.jpeg')} resizeMode='cover' />
        </Quadrado>

        {/* imagem externa */}
        <Retangulo cor="#BEEBF0">
          <ImagemRetangular source = {{uri:'https://howtobelieveinyourdreams.files.wordpress.com/2013/07/104.jpg'}} resizeMode='cover' />
        </Retangulo>

      </Header>
    </Pagina>
  );
}