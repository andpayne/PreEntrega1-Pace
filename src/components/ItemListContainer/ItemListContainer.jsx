import { useState, useEffect } from "react"

// Consulta a mis productos de mi base de datos y se los envio a ItemList. COMPONENTE PRINCIPAL
const BDD = [
    {
        "id": 1,
        "idCategoria": 1,
        "nombre": "Celular",
        "marca": "Mac",
        "modelo": "iPhone-14-Pro-Max",
        "precio": 413478,
        "stock": 30,
        "img": "img/iphone14ProMax.jpeg"
    },
    {
        "id": 2,
        "idCategoria": 2,
        "nombre": "Celular",
        "marca": "Motorola",
        "modelo": "EDGE-30",
        "precio": 149999,
        "stock": 20,
        "img": "img/motorolaEdge30.jpg"
    },
    {
        "id": 3,
        "idCategoria": 3,
        "nombre": "Celular",
        "marca": "Samsung",
        "modelo": "M-13",
        "precio": 81699,
        "stock": 15,
        "img": "img/samsungM13.jpg"
    },
    {
        "id": 4,
        "idCategoria": 4,
        "nombre": "Celular",
        "marca": "Xiaomi",
        "modelo": "REDMI-NOTE",
        "precio": 151653,
        "stock": 30,
        "img": "img/xiaomiRedmiNote.jpg"
    },
    {
        "id": 5,
        "idCategoria": 4,
        "nombre": "Televisor",
        "marca": "Samsung",
        "modelo": "Serie-5",
        "precio": 89999,
        "stock": 7,
        "img": "img/samsungSerie5.jpg"
    },
    {
        "id": 6,
        "idCategoria": 4,
        "nombre": "Televisor",
        "marca": "Samsung",
        "modelo": "UN-50",
        "precio": 144999,
        "stock": 20,
        "img": "img/samsungUN50.jpg"
    },
    {
        "id": 7,
        "idCategoria": 2,
        "nombre": "Televisor",
        "marca": "Sony",
        "modelo": "Bravia",
        "precio": 123452,
        "stock": 10,
        "img": "img/sonyBravia.jpg"
    },
    {
        "id": 8,
        "idCategoria": 3,
        "nombre": "Televisor",
        "marca": "Hisense",
        "modelo": "32-A",
        "precio": 80523,
        "stock": 30,
        "img": "img/hisense32a.jpg"
    },
    {
        "id": 9,
        "idCategoria": 4,
        "nombre": "Computadora",
        "marca": "GFast",
        "modelo": "X-300",
        "precio": 253299,
        "stock": 21,
        "img": "img/gFastX300.jpg"
    },
    {
        "id": 10,
        "idCategoria": 1,
        "nombre": "Computadora",
        "marca": "AMD",
        "modelo": "Ryzen-5",
        "precio": 353251,
        "stock": 25,
        "img": "img/amdRyzen5.jpg"
    },
    {
        "id": 11,
        "idCategoria": 2,
        "nombre": "Computadora",
        "marca": "AMD",
        "modelo": "Renoir",
        "precio": 399353,
        "stock": 30,
        "img": "img/amdRenoir.jpg"
    },
    {
        "id": 12,
        "idCategoria": 1,
        "nombre": "Computadora",
        "marca": "AMD",
        "modelo": "Ryzen-7",
        "precio": 2395990,
        "stock": 20,
        "img": "img/amdRyzen7.jpg"
    }
]
export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect( ()=> {
      const promesa = () => new Promise ((resolve, reject) => { 
        if (true) {
            resolve(BDD)
        }
        reject("No posee los permisos necesarios")
      }) 

      promesa()
        .then(productos => console.log(productos))
        .catch(error => console.log(error))

    }, [] )

    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default ItemListContainer