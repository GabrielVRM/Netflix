import netflix from '../../../public/Netflix.png'
import avatar from '../../../public/Netflix-avatar.png'

import { Div} from './styles/Index'
 

 export default function HeaderComponets ({scroll}) {

    return(

        <Div>
        <header className={scroll ? 'header-scroll' : 'header'}>
            <img className='Header-Logo' src={netflix}/>
            <img className='Header-Avatar' src={avatar}/>
        </header>
        </Div>
    )
}

