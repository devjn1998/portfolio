import Avatar from '../../components/Avatar'
import { Paragrafo } from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Botao, Descricao, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo textAlign="center" fontSize={20}>
        Juan Costa
      </Titulo>
      <Paragrafo tipo="principal" fontSize={16}>
        juandev1998
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <Botao>Trocar tema</Botao>
    </SideBarContainer>
  </aside>
)

export default Sidebar
