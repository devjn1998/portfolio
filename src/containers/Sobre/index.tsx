import { Paragrafo } from '../../components/Paragrafo'

import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
      repudiandae cupiditate, odit, sit, dolore sequi vitae consequatur corrupti
      quam corporis amet temporibus deserunt suscipit! Magni sequi culpa
      corrupti similique maxime!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=devjn1998&show_icons=true&layout=compact&langs_count=7&theme=dracula" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=devjn1998&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
