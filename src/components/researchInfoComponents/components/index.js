import styled from "styled-components";
import Colors from "../../../constants/colors";

export const Container = styled.div`
  background: #f2f3f5;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: ${Colors.charcoleText};
`;
export const YellowLine = styled.div`
  width: 150px;
  height: 5px;
  background: ${Colors.deepOrange};
  margin-top: 20px;
  margin-bottom: 40px;
`;
export const Card = styled.div`
  background-color: white;
  min-width: 200px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  -webkit-box-shadow: 0px 6px 36px -16px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 36px -16px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 36px -16px rgba(0, 0, 0, 0.75);
`;
export const Icon = styled.div`
  background-color: #f2f3f5;
  padding: 15px;
  border-radius: 50%;
  margin-bottom: 15px;
`;
export const PageInfoText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${Colors.charcoleText};
  margin-bottom: 15px;
`;
export const NormalText = styled.div`
  color: ${Colors.charcoleText};
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
