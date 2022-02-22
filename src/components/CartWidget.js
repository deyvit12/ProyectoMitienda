import cart from '../imagen/cart.png';
export function CartWidget({ numOfItems }) {
    return (
        <div className="ms-5 me-0 container-fluid ">
        <a>
        <span className="ml-4 badge bg-info " >{numOfItems}</span>
            <img src={cart} alt="LogoNav" width="60">
                
            </img>
        </a>
        </div>
    )
}


