

import { useRef } from 'react'
import { Title, Container, Form, ContainerInput, Imput, InputLabel } from './styles'
import api from '../../services/api'
import Button from '../../components/Button'
import Background from '../../components/topBackground'
import { useNavigate } from 'react-router-dom'




function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {

    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value



    })
    navigate('/lista-de-usuarios')
  }



  return (


    <>
      <Container>
        <Background />


        <Form>
          <Title>Cadastro de Ususarios </Title>
          <ContainerInput>

            <div>
              <InputLabel>
                Nome<span>  *</span>
              </InputLabel>
              <Imput type='text' placeholder='Nome do usuario' ref={inputName} />
            </div>

            <div>
              <InputLabel>
                Idade<span>  *</span>
              </InputLabel>
              <Imput type='number' placeholder='Idade do usuario' ref={inputAge} />
            </div>

          </ContainerInput>

          <div style={{ width: '100%' }}>
            <InputLabel>
              E-mail<span>  *</span>
            </InputLabel>
            <Imput type='email' placeholder='E-mail do usuario' ref={inputEmail} />
          </div>



          <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuarios</Button>
        </Form>
        <Button type='button' onClick={() => navigate('/lista-de-usuarios')} >Ver lista de usuarios</Button>

      </Container>
    </>

  )
}

export default Home
