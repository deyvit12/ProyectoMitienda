import { classNames } from '../utils/classNames'

export function Button({ className, disabled, ...props }) {
    return ( <
        button disabled = { disabled }
        className = {
            classNames(
                className,
                'text-center',
                disabled && 'text-center', !disabled && 'text-center'
            )
        } {...props }
        />
    )
}