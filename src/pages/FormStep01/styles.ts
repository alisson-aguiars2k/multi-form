import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  p {
    font-size: 16px;
    color: rgb(255, 207, 44, 0.9);
  }
  h1 {
    margin: 0;
    pading: 0;
    font-size: 26px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
  hr {
    height: 1px;
    border: 0;
    background-color: rgb(255, 227, 44, 0.2);
    margin: 30px 0;
  }

  label {
    font-size: 16px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid rgb(255, 207, 44, 0.9);
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background-color: transparent;
      @media (max-width: 600px) {
        font-size: 12px;
      }
    }
    input:focus {
      border: 2px solid rgba(144, 238, 144);
    }
  }

  button {
    background-color: #52acff;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
    transition: all 0.3s linear;
    @media (max-width: 768px) {
      padding: 10px 20px;
    }

    :hover {
      background-color: rgb(255, 207, 44, 0.9);
      transition: all 0.3s linear;
    }
  }
`;