import { Paragrafo } from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, VisualizarBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com VueJS</Paragrafo>
    <VisualizarBotao>Visualizar</VisualizarBotao>
  </Card>
)

export default Projeto
