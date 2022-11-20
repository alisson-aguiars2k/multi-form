import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  @media (max-width: 825px) {
    flex-direction: column;
  }
`;
export const Title = styled.div`
  padding: 25px;
  border-bottom: 1px solid rgb(255, 227, 44, 0.2);

  h1 {
    margin: 0;
    padding: 0;
    font-size: 48px;
    text-shadow: 2px 2px 8px rgb(255, 207, 44, 0.9);
    text-align: center;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  p {
    font-size: 24px;
    color: rgb(255, 207, 44, 0.9);
    text-align: center;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Homage = styled.div`
  border-bottom: 1px solid rgb(255, 227, 44, 0.2);

  h4 {
    padding: 30px;
    font-size: 16px;
    text-shadow: 2px 2px 8px rgb(255, 207, 44, 0.9);
    text-align: center;
  }
`;