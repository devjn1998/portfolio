import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid props.theme.corDaBorda;
  padding: 16px;
  @media (max-width: 768px) {
    text-align: center;
  }
`
export const VisualizarBotao = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.corFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  cursor: pointer;
`
