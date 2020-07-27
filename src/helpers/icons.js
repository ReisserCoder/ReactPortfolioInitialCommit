import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhone,
    faCompass,
    faEnvelopeOpen,
    faLock
} from "@fortawesome/free-solid-svg-icons";


const Icons = () => {
  library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faCompass, faEnvelopeOpen, faLock)
};

export default Icons;