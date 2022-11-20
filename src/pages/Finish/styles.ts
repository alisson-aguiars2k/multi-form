import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  p {
    font-size: 32px;
    color: rgb(255, 207, 44, 0.9);
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  hr {
    height: 1px;
    border: 0;
    background-color: rgb(255, 227, 44, 0.2);
    margin: 30px 0;
  }
  h1 {
    margin: 0;
    pading: 0;
    font-size: 48px;
    color: green;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  h2 {
    font-size: 24px;
    color: rgb(255, 207, 44, 0.9);
    fony-weight: bold;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
  h3 {
    color: rgb(255, 207, 44, 0.9);
    font-size: 20px;
    @media (max-width: 600px) {
      display: flex;
    flex-direction: column;
    }
    
    span {
      color: green;
      font-weight: normal;
      @media (max-width: 768px) {
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
export const Result = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 15px 30px -5px;
  padding: 20px;
  background-color: rgb(0,0,0,0.2);
  border-radius: 50px 50px
  
`;
