import styled from 'styled-components/native';
import {IconProps} from '@shared/components/icons/icon.comp';

export const IconText = styled.Text<Partial<IconProps>>`
  position: relative;
  align-items: center;
  justify-content: center;

  font-family: Feather;
  color: ${({ color }) => color};
  font-size: ${(props: IconProps) => props.size}px;
  line-height: ${(props: IconProps) => props.size}px;
`;

export const IconWrapper = styled.View<Partial<IconProps>>`
  position: relative;
  align-items: center;
  justify-content: center;
  width: ${(props: IconProps) => props.size}px;
  height: ${(props: IconProps) => props.size}px;
`;
