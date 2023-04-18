import cart from './assets/cart.png'
export const CartWidget = ( { cantCarrito } ) => {
    return (
        <>
            <img src={cart} alt="cart-widget" />
            <p> {cantCarrito} </p>
        </>
    )
}

