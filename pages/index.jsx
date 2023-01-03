import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Cabecalho from './components/cabecalho'
import PokemonAppear from './components/PokemonsAppear'
const inter = Inter({ subsets: ['latin'] })
import styled from 'styled-components'

const Flexar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <>
      <PokemonAppear/>
    </>  
  )
}
