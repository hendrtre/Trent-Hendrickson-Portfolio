import { library } from "@fortawesome/fontawesome-svg-core"

import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faJedi, 
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faFileAlt,
    faBusinessTime,
    faUserTie, 
} from "@fortawesome/free-solid-svg-icons"

import { 
    faLinkedin,
    faGithubSquare
} from "@fortawesome/free-brands-svg-icons"


const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faJedi, 
        faPlusCircle, 
        faPhone,
        faEnvelope,
        faMapMarkedAlt,
        faLock,
        faFileAlt,
        faBusinessTime,
        faLinkedin,
        faGithubSquare,
        faUserTie,
    )   
}

export default Icons 