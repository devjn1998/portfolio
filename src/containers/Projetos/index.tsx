import { Projeto, ProjetoFn, ProjetoLarva } from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Projetos = () => (
  <>
    <section>
      <Titulo fontSize={16}> Projetos:</Titulo>
      <Lista>
        <li>
          <Projeto />
        </li>
        <li>
          <ProjetoFn />
        </li>
      </Lista>
    </section>
    <section>
      <Titulo fontSize={16}> Projetos em criação:</Titulo>
      <Lista>
        <li>
          <ProjetoLarva />
        </li>
      </Lista>
    </section>
  </>
)

export default Projetos
