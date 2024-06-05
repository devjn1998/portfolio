import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

export const Paragrafo = ({
  children,
  tipo = 'secundario',
  fontSize
}: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)
export const Paragrafo2 = ({ children, tipo = 'principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)
