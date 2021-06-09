import styled from "styled-components";

export const Text = styled.div`
  font-size: 1.125rem;
  color: #ffcc00;
  text-align: center;
`;

export const StyledDiv = styled.div`
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 25%;
  max-height: 25%;
`;

export const ContentContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  margin: 30px auto;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
  
  
`;
