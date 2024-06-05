import styled from 'styled-components'

import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'normal')};
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: 16px;
`
