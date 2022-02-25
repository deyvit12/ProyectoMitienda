# MI TIENDA - for DEYVIT ACOSTA

## Descripcion

Proyecto de Deyvit Acosta Coronado. Este proyecto se desarrollo paso a paso de la mano con las enseñanzas de Coder House, trata de un proyecto de mi tienda, en la cual tiene toda la secuencia fluida para poder comprar un producto en la web creada.

## Resúmenes


  <a href="https://drive.google.com/file/d/18pLM6KLQRnu-7KjdjZwYMCnRQ-D8IT6k/view?usp=sharing">
    <img src="https://anthoncode.com/wp-content/uploads/2020/07/google-drive-icon.png">
  </a>
  <p><em>[Resumen-De-la-Aplicacion](https://drive.google.com/file/d/18pLM6KLQRnu-7KjdjZwYMCnRQ-D8IT6k/view?usp=sharing)</em></p>
</div>

---

## Deploys

- **Web**: https://deyvit12.github.io/ProyectoMitienda/
- **GitHub**: https://github.com/deyvit12/ProyectoMitienda.git


## Architecture

- **Framework**: [Bootstrap](https://getbootstrap.com/)
- **Component Driven**: [Node JS](https://nodejs.org/es/)
- **Styling**: [Sweetalert](https://sweetalert.js.org/)

## Estructura

```
├── 📁 node_modules 
├── 📁 public: Carpeta para servir archivos estáticos, 
    ├── 📄index.html
├── 📂 src: Contiene todo el código fuente.
|  ├── 📄 APP.js: conriene todas las paginas
|  ├── 📂 components
|  |  ├── 📄 Button: contiene sintaxis de botones
|  |  ├── 📄 CartWidget.js: contiene widget
|  |  ├── 📄 index.js: contiene todas las paginas exportadas
|  |  ├── 📄 Item.js: conriene todas las items
|  |  ├── 📄 ItemCount.js: contiene  el contador
|  |  ├── 📄 ItemDetail.js: conriene detalles de items
|  |  ├── 📄 ItemDetailContainer.js: contiene contenedor de items
|  |  ├── 📄 ItemList.js: contiene  listas items
|  |  ├── 📄 ItemsListContainer.js: contiene todas las paginas
|  |  ├── 📄 NavBar.js: contiene la nav
|  |  ├── 📄 Spinner.js: contiene logo spiner
|  |  ├── 📄 TextField.js: contiene los tecxtos pricipales
|  |  ├── 📄 Titulo.js: contiene los titulos
|  ├── 📁 contexts: Layout context
|  |  ├── 📄 CartContext.js: contiene conexiones de cart
|  ├── 📁 firebase: Connectors to external services
|  |  ├── 📄 connector.js: contiene conexiones con las base de datos
|  |  ├── 📄 index.js: contiene index de la conexion a la BD
|  ├── 📁 hooks: Next.js pages
|  |  ├── 📄 useCart.js: contiene conexiones al carrito
|  ├── 📂 imagen: carpeta imagenes 
|  |  ├── 📄 cart.png: contiene img carrito
|  |  ├── 📄 soydeyvit.png: contiene img logo principal
|  ├── 📂 pages
|  |  ├── 📄 Cart.js: contiene pagina principal del carrito
|  |  ├── 📄 Category.js: contiene conneccion categorias
|  |  ├── 📄 Home.js: contiene conexion a la home
|  |  ├── 📄 ProductoDetail.js: contiene conexion detalle de productos
|  └── 📁 providers:
|  |  ├── 📄 CartProviders.js: contiene pagina Providers
|  └── 📁 utils:
|  |  ├── 📄 ClasNames.js: Nombres de las clases

```

> Other folders and files are required for tools configuration

## Running

### Requirements

- Node.js `>=14.x`


> You can use [nvm-sh](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)

### Prepare

```bash

git clone https://github.com/deyvit12/ProyectoMitienda.git
cd my.proyect-react
```

### Development

- To run the Next App

```bash
npm start

```

- To run the Storybook App

```bash
npm i Storybook

```


## Considerations

- El proyecto esta comiteado desde la clase 1 hasta la ultima de manera progresiva.
- la imagen del carrito y el logo principal estan en el proyecto, en la carpeta images, el resto estan la Base de datos de firebase.


## License

MIT © [Deyvit Acosta Coronado](https://face.pe)
