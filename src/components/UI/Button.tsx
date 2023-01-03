import { FC, MouseEvent } from "react";
import BootStrapButton from 'react-bootstrap/Button';

const Button: FC<{
    text: string,
    variant: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}> = props => {
    return (<>
        <BootStrapButton variant={props.variant} onClick={props.onClick}>
            {props.text}
        </BootStrapButton>{' '}
    </>);
}

export default Button;