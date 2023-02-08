import styled from "styled-components"
import Image from "next/image"

const Icone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    scale: 90%;
    
    :hover{
        scale: 100%;
        p{
            background-color: orange;
        }
    }
    
    img{
        width: 2.5rem;
        height: 2.5rem;
        transform: translateY(1rem);
}
`

export default function Icons(props) {
    return(
        <>
        <Icone>
           <Image 
            src={props.imagem}
            alt="Pokemon"
           /> 
            <p>{props.texto}</p>
        </Icone>
        </>
    )

}