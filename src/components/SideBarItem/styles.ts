import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0;
  cursor: pointer;
  @media (max-width: 600px) {
    justify-content: center;
    align-item: center;
    padding: 0px 40px;
    margin: 30px 0;
    padding: 0px 25px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
`;
export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`
export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  color: #fff;
  @media (max-width: 600px) {
    text-align: left;
  }
`;
export const Description = styled.div`
  text-align: right;
  font-size: 16px;
  color: rgb(255, 207, 44, 0.9);
  @media (max-width: 600px) {
    text-align: left;
  }
`;
export const IconArea = styled.div<{ active: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "rgb(255, 207, 44, 0.9)" : "rgb(255,255,255,0.1)"};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Point = styled.div<{ active: boolean }>`
  width: 6px;
  height: 6px;
  border: 3px solid rgb(255, 207, 44, 0.9);
  border-radius: 50%;
  box-shadow: 1px 1px 3px rgb(0, 0, 0, 0.9);
  margin-left: 30px;
  margin-right: -6px;
  background-color: ${(props) =>
    props.active ? "rgb(255, 207, 44, 0.9)" : "#52acff"};
`;