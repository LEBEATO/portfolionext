import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

/* 
 * Os metadados definidos em 'app/layout.tsx' já são aplicados a esta página.
 * Se você quisesse um título ou descrição diferente APENAS para a Home,
 * você poderia exportar um objeto 'metadata' daqui também.
*/

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}