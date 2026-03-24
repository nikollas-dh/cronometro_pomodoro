import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import {DefaultInput} from './components/DefaultInput'
import { CirclePlay, Form, CircleStop } from 'lucide-react'
import { DefaultButton } from './components/DefaultButton'
import {Cycles} from './components/Cycles'
import {Footer} from './components/Footer'


export function App() {
  return (
    <>
      <Container>
          <Logo/>
      </Container>

      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
        <form className="form" action="">

            <div className="formRow">
                <DefaultInput labelText='task' id='meu input' type='text' placeholder = "digite algo"/>
            </div>

            <div className='formRow'>
              linha verde
            </div>
            <div className='formRow'>
              <Cycles/>
            </div>
            <div className="formRow">
              <DefaultButton icon ={<CirclePlay/>} color= 'green'/>
              <DefaultButton icon ={<CircleStop/>} color = 'red'/>
            </div>
        </form>
      </Container>    

      <Container>
          <Footer/>       
      </Container> 
    </>
  )
}