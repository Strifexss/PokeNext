import {useRouter} from 'next/dist/client/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`
const Main = styled.div`
    width: 60%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        margin: 1rem;
        font-weight: lighter;
    }
    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;

    p {
        text-align: center;
        margin: 1rem;
    }

    @media (max-width: 900px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }

`

const BlueSquare = styled.div`
    width: 90%;
    border-radius: 1rem;
    background-color: #30A7D7;
    margin: 2rem;
    display: grid;
    grid-template-columns: 50% 50%;
    
    p {
        color: #fff;
        font-weight: bold;
    }

    h3 {
        text-align: center;
        color: black;
        font-weight: lighter;
        margin-bottom: 1rem;
}
`

const BlueSquareFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Imagem = styled.div`
    display: flex;
    border-radius: 1rem ;
    justify-content: center;
    align-content: center;
    background-color: #f0ecec;
    margin: 1rem;
    img{
        transform: translateY(3rem);
        width: 80%;
        height: 80%;
    }

    @media (max-width: 900px) {
        img{
        transform: translateY(0);
        width: 20rem;
        height: 80%;
        }
    }
`

export default function Pokemons() {
    
    const Route = useRouter()
    const [pokemon, setPokemon] = useState([])
    const [teste, setTeste] = useState(1)

    

   const getPokemon = async () => {
      await axios.get((`https://pokeapi.co/api/v2/pokemon/${Route.query.id}`)).then((response) =>  {
                setPokemon(response.data)
                console.log(pokemon)
                setTeste(2)
        })
    }
       
    useEffect(() => {
        getPokemon()
    },[teste])


    return(
        <>
        <Flex>
            <Main>
                <h1>{pokemon.name}  Nº {pokemon.id}</h1>
                <Grid>
                    <Imagem>
                            {Route.query.id == pokemon.id
                            ? <img src={pokemon.sprites.other.dream_world.front_default} />
                            : <h1>Teste</h1>
                        }
                    </Imagem>
                    <div>
                        <p>Lorem, ipsum dolor sit adipisicing elit. Eos itaque maxime vel sunt. Minima placeat voluptate nemo cumque possimus similique repellendus tempore 
                            iure, dolorem itaqu</p>
                            <Flex>
                                <BlueSquare>
                                    <div>
                                        <BlueSquareFlex>
                                        <div>
                                        <p>Height</p>
                                        <h3>{pokemon.height}m</h3>
                                        </div>
                                        <div>
                                        <p>Weight</p>
                                        <h3>{pokemon.weight}</h3>
                                        </div>
                                        <div>
                                        <p>Id</p>
                                        <h3>{pokemon.id}</h3>
                                        </div>
                                        </BlueSquareFlex>
                                    </div>
                                    <div>
                                        <BlueSquareFlex>
                                        <div>
                                            <p>BaseExperience</p>
                                            <h3>{pokemon.base_experience}</h3>
                                        </div>
                                        <div>
                                            <p>Ability</p>
                                        {Route.query.id == pokemon.id
                                            ? <h3>{pokemon.abilities[0].ability.name}</h3>  
                                            : <h1>Teste</h1>
                                        }
                                        </div>
                                        </BlueSquareFlex>
                                    </div>
                                </BlueSquare>
                            </Flex>
                    </div>
                </Grid>
            </Main>
         </Flex>
         </>
    )
}

