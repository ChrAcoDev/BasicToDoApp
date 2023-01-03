import { FC, MouseEvent } from "react";

const Button: FC<{
    text: string,
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}> = props => {
    return <button onClick={props.onClick}>{props.text}</button>;
}

export default Button;