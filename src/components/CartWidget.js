export function CartWidget({ numOfItems }) {
    return (
        <div className=".cart-Widget">
        <a className="navbar-brand" >
            <img src="https://image.flaticon.com/icons/png/512/107/107831.png" alt="LogoNav" className="w-10 d-flex justify-content-end">
            </img>
        </a>
        <span className="ml-4">{numOfItems}</span>
        </div>
    )
}


