import axios from "axios"
import { useEffect, useState } from "react"
import styled from 'styled-components'
import Link from "next/link"
import Image from "next/image"
import SearchIcon from "../imgs/IconSearch.png"
import Router from "next/router"
const Centralizar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Flexar = styled.div`
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    font-weight: lighter;
`
const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    color: black;
    background-color: #fff;
    width: 60%;
    height: 100%;
  
    
    @media only screen and (max-width: 390px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: #fff;
    width: 100%;
}
`

const PokemonsDiv = styled.div`
    margin: 2rem;
    width: 15rem;
    height: 20rem;
    background-color: #fff;
    display: grid;
    grid-template-rows: 70%;
    color: black;
    cursor: pointer;
    transform: scale(90%);
    transition: 0.1s;

    div{ 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p{
            background-color: orange;
            width: 5rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h2{
            margin: 1rem;
            text-decoration: none;
            color: inherit;
        }
    }

    :hover{
        transform: scale(100%);
    }
    
`

const Imagem =styled.div`
    background-color: #f0ecec;
    border-radius: 1rem;
    img{
        width: 100%;
        height: 100%;
    }

    @media only screen and (max-width: 390px) {
    
        img{
            width: 80%;
            height: 80%;
        }
}
`

const Pesquisar = styled.div`
background-color: #1a1919;
  width: 60.2%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  font-weight: lighter;

  @media only screen and (max-width: 390px) {
    width: 100%;
    display: flex;
    flex-direction: column;
}
`

const PesquisaFlex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    h1 {
        font-weight: lighter;
    }

    input{
        width: 15rem;
        height: 2rem;
        margin: 1rem;
    }

    button {
        background-color: #e07c09;
        cursor: pointer;
        width: 5rem;
        height: 2.5rem;
        border-radius: 1rem;
        text-align: center;
        transform: translateY(1rem);
        transition: 0.1s;

        :hover{
            background-color: #7c4405;
        }

        img {
            margin: 0.2rem;
            width: 2.5rem;
            height: 2rem;
        }
    }

    @media only screen and (max-width: 390px) {
        margin: 1rem;
}
`

const GreenCard = styled.div`
    
    align-items: center;
    width: 70%;
    height: 50%;
    margin: 2rem;
    background-color: green;
    border-radius: 1rem;

    h3 {
        margin: 1rem;
    }

    @media only screen and (max-width: 390px) {
        transform: translateX(2.7rem);
        margin:0.5rem;
}
`

export default function PokemonAppear() {

    const [pokemons, setPokemons] = useState([]) 
    
    useEffect(() => {
            for(let x = 1; x <= 900; x++) {
                axios.get((`https://pokeapi.co/api/v2/pokemon/${x}`)).then((response) => {
                    setPokemons(pokemons => [...pokemons, response.data])          
                 })
            }
        }, [])
        

    function Pesquisa() {
        const CampoPesquisa = document.getElementById("Search").value
        console.log(CampoPesquisa)
        axios.get((`https://pokeapi.co/api/v2/pokemon/${CampoPesquisa}`)).then((response) => {
                    if(response.status == 200) {
                       Router.push(`/pokemons/${CampoPesquisa}`)
                    }         
                 })
    }
        
    return(
        <Centralizar>
            <Pesquisar>
                <PesquisaFlex>
                    <h1>Nome ou número</h1>
                    <div>
                        <input id="Search" type="number" placeholder="Ex: Pikachu = 25" />
                        <button onClick={Pesquisa}><Image src={SearchIcon}/></button>
                    </div>
                </PesquisaFlex>
                <GreenCard>
                    <h3>Realize a busca do Pokemon usando seu ID na Pokedex</h3>
                </GreenCard>
            </Pesquisar>
            <Flexar>
                <Main>
            {pokemons.map(x => {
                return(
                    <Link href={`/pokemons/${x.id}`}>
                    <PokemonsDiv>
                        <Imagem>
                        <img src={x.sprites.front_default} />
                        </Imagem>
                        <div>
                            <h2>
                                {x.name}
                            </h2>
                            <p>{x.types[0].type.name}</p>
                        </div>
                    </PokemonsDiv>
                    </Link>
                )
            })}
            </Main>  
             </Flexar>
             </Centralizar>
    )
}