import React, { useEffect } from 'react';
import { useAppSelector,useAppDispatch } from '../../hooks';
import { getAvailablePcs, cart } from '../../redux/slices/cart';
import { TextButton } from './cart.styled';
import { operationHandler } from '../../redux/action/cartAction';
import { ADD,DELETE} from '../../redux/slices/cart';
interface ButtonContainerProps {
    id: number;
    size: number;
    type: string;
    children: React.ReactNode;
}
function ButtonContainer(props: ButtonContainerProps) {
    const dispatch = useAppDispatch();
    const availablePcs = useAppSelector(getAvailablePcs(props.id, props.size));
    const cartItems = useAppSelector(cart);
    console.log();
    useEffect(() => {}, [availablePcs]);
    const button = (
        <TextButton
            mr
            data-id={props.id}
            onClick={(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                if (!(e.target instanceof HTMLButtonElement)) {
                    return;
                  }
                let idx:number = Number(e.target.dataset.id);
                dispatch(operationHandler(props.type, cartItems[idx].id, cartItems[idx].size));
            }}
        >
            {props.children}
        </TextButton>
    );
    return <>{props.type === ADD.toString() ? availablePcs > 0 ? button : <div></div> : button}</>;
}
export default ButtonContainer;
