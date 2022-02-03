import cart from '../aseets/cart.png';
export function CartWidget({ numOfItems }) {
    return (
        <div className="ms-5 me-0 container-fluid ">
        <a className=" " >
        <span className="ml-4 badge bg-secondary " >{numOfItems}</span>
            <img src={cart} alt="LogoNav" className="  "  width="60">
                
            </img>
        </a>
        </div>
    )
}


