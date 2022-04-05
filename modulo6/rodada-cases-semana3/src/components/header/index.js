import logo_TMDB from '../../img/logo_TMDB.png'
import { HeaderContainer, RetangleOne, RetangleTwo } from './styled'

export default function Header() {
    return (
    <HeaderContainer>
        <RetangleOne>
            <img src={logo_TMDB} alt='Logo'/>
        </RetangleOne>
        <RetangleTwo>
            <p>
             Milhões de filmes, séries e pessoas para descobrir. Explore já.
            </p>
        </RetangleTwo>
    </HeaderContainer>
    )
}