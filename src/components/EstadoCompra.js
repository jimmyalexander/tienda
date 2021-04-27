import React from 'react'

export const EstadoCompra = () => {
  return (
    <div className='container_estado'>
      <div className='opc-compra'>
        <div className='calculos-compra'>
          <div className='subtotal'>
            <p>Subtotal</p>
            <p>$15.501</p>
          </div>

          <div className='envio'>
            <p>Gastos de envío</p>
            <p>A partir de $6.000</p>
          </div>

          <div className='total'>
            <p>Total</p>
            <p>A partir de $6.000</p>
          </div>


        </div>

        <div className='btn-compras'>
          <button>Finalizar compra</button>
          <button>Vaciar carrito</button>
          <button>Seguir comprando</button>
        </div>
      </div>
    </div>
  )
}
