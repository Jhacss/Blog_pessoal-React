import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className="mt-auto flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Desenvolvido por João Henrique | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/jo%C3%A3o-henrique-0665081a2/" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo size={48} weight="bold" />
                    </a>
                <a href ="https://www.github.com/Jhacss" target="_blank" rel="noopener noreferrer">
                        <  GithubLogo size={48} weight='bold' href="https://github.com/Jhacss" target="_blank" />
                    </a>
                    </div>
                </div>
            </div>
       )
    }
    return (
        <>
            { component }
        </>
    )
}

export default Footer