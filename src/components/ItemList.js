import  {Item}  from "./Item";



export const ItemList = ({param}) =>{
    return(
        <>
            { param && param.length > 0 ?
            param.map(item => {
                return <div key={item.id}>
                    <Item item={item}/>
                </div>
            })
              :"Error ..."}
        </>
        
    )
}

