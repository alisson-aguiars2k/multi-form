import styled from "styled-components";

export const Container = styled.div`
  background-color: #52acff;
  background-image: linear-gradient(180deg, #52acff 80%, #ffe32c 100%);
  color: #fff;
  min-height: 100vh;
  padding; 25px;
  
`;

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Steps = styled.div`
  flex: 1;
  display: flex;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 250px;
  border-right: 1px solid rgb(255, 227, 44, 0.2);
  @media (max-width: 600px) {
    padding: 25px;
  }
`;

export const Page = styled.div`
  flex: 1;
  padding-left: 40px;
  @media (max-width: 600px) {
    padding-left: 0px;
    padding: 25px
  }
`;
