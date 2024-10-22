import api from "../../services/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



import Button from "../../components/Button"
import Background from "../../components/topBackground"
import { Title } from "../Home/styles"
import { AvatarUser, CardUsers, Container, ContainerUsers, TrashIcon } from "./styles"
import Trash from '../../assets/trash.svg'




function ListUsers() {
    const voltar = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')
            console.log(data)

            setUsers(data)

        }

        getUsers()

    }, []);



    async function deleteUsers(id) {

        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)
    }



    return (
        <Container>

            <Background />
            <Title>Lista de Usuarios</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id} >
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>

                        </div>
                        <TrashIcon src={Trash} alt='lixo' onClick={() => deleteUsers(user.id)} />
                    </CardUsers>

                ))}
            </ContainerUsers>

            <Button theme='primary' onClick={() => voltar('/')}>Voltar</Button>
        </Container>
    )
}
export default ListUsers