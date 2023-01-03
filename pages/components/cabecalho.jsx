import styled from 'styled-components'
import PokemonLogo from "../imgs/pokemon-logo-0.svg"
import IconSobre from "../imgs/IconSobre.png"
import Image from 'next/image'
import Link from 'next/link'
import Icons from './Icons'
const Main = styled.div`
    background-color: #fff;
    color: black;
    height: 5rem;
    width: 100%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    a {
        text-decoration: none;
        color: inherit;
    }

    h1 {
        margin: 1rem;
    }

    p {
        margin: 1rem;
        transition: 0.1s;
        width: 3rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {
            background-color: #b8b4b4;

        }
    }

    img {
        width: 50%;
        height: 30rem;
    }

`

export default function Cabecalho() {
    return(
            <Main>
                <Link href={"/"}>
                    <Image 
                    src={PokemonLogo}
                    alt="Pokemon" 
                />
                </Link>
                <Link href={"/sobre"}>
                    <Icons imagem={IconSobre} texto="About"/>
                </Link>
            </Main>
        )
}