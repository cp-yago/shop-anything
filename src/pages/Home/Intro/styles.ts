import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  align-self: center;
  width: 1000px;
  margin: 64px 0;

  grid-template-areas: 
    'title title title image'
    'subtitle subtitle subtitle image'
    'items items items image'
  ;  
`;

export const TitleContainer = styled.div`
  grid-area: title;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    margin-bottom: 8px;
  }

  /* background-color: yellow; */
`;

export const SubTitleContainer = styled.div`
  grid-area: subtitle;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 130%;
  }
`;

export const ImageContainer = styled.div`
  grid-area: image;
  img {
    width: 350px;
  }
`;

export const ItemsContainer = styled.div`
  grid-area: items;
  display: grid;
  margin-top: 8px;
  
  grid-template-columns: auto auto;
`;
