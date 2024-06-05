import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaDark from './themes/dark'
import temaLight from './themes/light'

function App() {
  const [EstadoUsandoTemaDark, setEstadoUsandoTemaDark] = useState(false)

  function mudarTema() {
    setEstadoUsandoTemaDark(!EstadoUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={EstadoUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar mudarTema={mudarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
