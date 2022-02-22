import soydeyvit from '../imagen/soydeyvit.png';

export function Titulo (){

    return(
        <section className="py-2 ">
        <h1  className='text-center fst-italic bg-info bg-body rounded'>SOY DEYVIT STORE</h1>
        <div className="container-fluid ">
        <div className="row">
            <article className="col-lg-3 col-sm-12  d-flex justify-content-center align-items-center mb-2">
                    <img src={soydeyvit} alt="LogoNav" width="180" className='mx-5' href=""></img>
            </article>
            <article className="col-lg-8 col-md-9 col-sm-12 py-5">
            <p>BIENVENIDOS A MI TIENDA, Soy un Fanático de la tecnología y de los negocios por Internet,deseo llevar mi pasión a otro nivel
                compartiendo mi adicción con todos aquellos que les gusta todo lo referente a la tecnología.</p>
            </article>
        </div>
        </div>
        </section>
        )

}