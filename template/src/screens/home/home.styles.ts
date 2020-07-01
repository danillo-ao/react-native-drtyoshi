import styled from 'styled-components/native';

export const PageWrapper = styled.View`
  width: 100%;
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;
export const ImageLogo = styled.Image.attrs((props) => ({
  resizeMode: 'contain',
  ...props
}))`
  width: 160px;
  height: 160px;
  position: relative;
`;

export const HomeTitle = styled.Text`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontsSizes.xxl};
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: ${({ theme }) => theme.fontsWeights.bold};
  padding: ${({ theme }) => theme.unit * 4}px;
`;

export const HomeDescription = styled.Text`
  width: 100%;
  text-align: justify;
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontsSizes.md};
  margin-bottom: ${({ theme }) => theme.unit * 2}px;
`;
