import { Paragrafo } from '../../components/Paragrafo'

import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Tenho como interesse em qualquer área da minha vida em fazer a diferença,
      chegar em qualquer lugar e sempre mostrar que quero aprender, somar e
      multiplicar a produção. Sou estudante de tecnologia, sei lidar com
      problemas e garanto excelência em minhas tarefas.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=devjn1998&show_icons=true&layout=compact&langs_count=7&theme=dracula" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=devjn1998&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
