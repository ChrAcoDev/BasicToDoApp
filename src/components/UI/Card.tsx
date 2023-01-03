import { FC, ReactNode } from "react";
import BootStrapCard from 'react-bootstrap/Card';

const Card: FC<{
    children: ReactNode
}> = props => {
    return (<>
        <BootStrapCard className="mt-2 ms-5 me-5 w-95 shadow-sm">
            <BootStrapCard.Body>
                {props.children}
            </BootStrapCard.Body>
        </BootStrapCard>
    </>);
}

export default Card;