import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
  
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: silver;
  border-radius: 25px;
  margin-top: 10px;
`;

export const HeaderTagContainer = styled.View`
  background-color: gray;
  height: 35px;
  width: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const HeaderTagText = styled.Text`
  color: #fff;
  font-size: 22px;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

export const ItemContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #F3F2F0;
  margin-top: 5px;
  padding: 10px;
  height: 50px;
`;

export const ItemTitle = styled.Text`
  font-size: 22px;
`;
