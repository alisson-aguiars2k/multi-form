import styled from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
    display: flex;
    border: 2px solid ${(props) =>
      props.selected ? "rgb(144,238,144)" : "#52acff"};
    border-radius: 10px;
    padding 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s linear; 
`;
export const Icon = styled.div`
  width: 80px;
  heigth: 80px;
  border-radius: 50%;
  background-color: #52acff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-right: 20px;
  
`;
export const Info = styled.div`
    flex: 1;
    margin-left: 20;

`
export const Title = styled.div`
    font-size: 17px;
    font-weiht: bold;
    margin-borrom: 7px;

`
export const Description = styled.div`
  font-size: 14px;
  color: rgb(255, 207, 44, 0.9);
  @media (max-width: 600px) {
    color: #52acff;
  }
`;