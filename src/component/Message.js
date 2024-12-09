import Communication from "./messages/Communication";
import Conflict from "./messages/Conflict";
import Emotional from "./messages/Emotional";
import Long from "./messages/Long";
import Partnership from "./messages/Partnership";
import Physical from "./messages/Physical";
import Quality from "./messages/Quality";
import Shared from "./messages/Shared";
import Spiritual from "./messages/Spiritual";
import Trust from "./messages/Trust";



const Message = ({close, msg, p, submit, quest}) => {

    if (p === 'Communication'){

        return ( 
            <Communication close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Emotional Connection'){

        return ( 
            <Emotional close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }
      
    if (p === 'Physical Intimacy'){

        return ( 
            <Physical close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Shared Values and Goals'){

        return ( 
            <Shared close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Trust and Respect'){

        return ( 
            <Trust close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Quality Time Together'){

        return ( 
            <Quality close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Conflict Management'){

        return ( 
            <Conflict close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Spiritual Connection'){

        return ( 
            <Spiritual close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Partnership and Teamwork'){

        return ( 
            <Partnership close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

    if (p === 'Long-Term Vision'){

        return ( 
            <Long close={close} msg={msg} submit={submit} quest={quest}/>
        );
    }

      
}
 
export default Message;