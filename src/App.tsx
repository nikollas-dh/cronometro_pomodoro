import './styles/global.css'
import './styles/theme.css'
import { Heading } from './components/Heading'
import { Container } from './components/Container'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import { CountDown } from './components/CountDown'
import {DefaultInput} from './components/DefaultInput'
import { CirclePlay, CircleStop } from 'lucide-react'
import { DefaultButton } from './components/DefaultButton'
import {Cycles} from './components/Cycles'
import {Footer} from './components/Footer'
import { useState } from 'react'


export function App() {
  
  const [numero,setNumero] = useState(0)
  function hendleClick(){
   setNumero(prevState => prevState +1)
  }
 
  return (
    <>

      <Heading>
          Numero: <span id='numero'>{numero}</span>
      </Heading>
          <button onClick={hendleClick}>Aumentar numero</button>

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
                <DefaultInput labelText={numero} id='meu input' type='text' placeholder = "digite algo"/>
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