import logo_TMDB from '../../img/logo_TMDB.png'
import { useHistory } from "react-router-dom";
import { goBack } from '../../routes/coordinator'
import { HeaderContainer, RetangleOne} from './styled'


export default function Header() {
    const history = useHistory();

    return (
    <HeaderContainer>
        <RetangleOne>
            <img src={logo_TMDB} onClick ={() => goBack(history)}/>
        </RetangleOne>
        
    </HeaderContainer>
    )
}