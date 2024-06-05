import { Paragrafo } from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, VisualizarBotao } from './styles'

export const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com JS</Paragrafo>
    <VisualizarBotao>
      <a href="https://juan-agenda.vercel.app/">Visualizar</a>
    </VisualizarBotao>
  </Card>
)

export const ProjetoFn = () => (
  <Card>
    <Titulo>Projeto Fn Agenciamentos</Titulo>
    <Paragrafo tipo="secundario">
      Desenvolvi um site de agenciamento marítimo offshore, utilizando HTML,
      JavaScript, jQuery e Sass. Este projeto representou uma oportunidade
      emocionante para aplicar minhas habilidades técnicas na criação de uma
      plataforma digital especializada para o setor marítimo.
    </Paragrafo>
    <VisualizarBotao>
      <a href="https://fnagenciamentos.com.br/  ">Visualizar</a>
    </VisualizarBotao>
  </Card>
)

export const ProjetoLarva = () => (
  <Card>
    <Titulo>Projeto Larva</Titulo>
    <Paragrafo tipo="secundario">
      Estamos desenvolvendo uma Tabacaria Online , utilizando React. O objetivo
      é criar uma aplicação que permita aos usuários realizar pedidos de
      produtos, além de gerenciar suas compras e reservas. Além disso, a
      aplicação deve ser responsiva e funcionar em diferentes dispositivos e
      navegadores.
    </Paragrafo>
    <VisualizarBotao>
      <a href="https://github.com/devjn1998/larva">Visualizar no GitHub</a>
    </VisualizarBotao>
  </Card>
)
