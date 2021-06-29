import React from 'react';
import { GenericButton } from './styles';

const ButtonComponent = ({ children, onPress }) => {
  return <GenericButton onPress={onPress}>{children}</GenericButton>;
};

export default ButtonComponent;
