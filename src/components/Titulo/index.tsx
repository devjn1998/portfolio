import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
  textAlign?: string
}

const Titulo = (props: Props) => (
  <TituloEstilo textAlign={props.textAlign} fontSize={props.fontSize}>
    {props.children}
  </TituloEstilo>
)

export default Titulo
