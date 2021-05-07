import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Footer } from './Footer'
import { TitleNav } from './TitleNav'

export const Facturar = () => {
  const history = useHistory()
  const handleRegresar = () => {
    history.goBack()
  }
  return (
    <div className='component_facturar' >
      <TitleNav name='Facturación' />
      
      <Link className='facturacion_regresar' onClick={ handleRegresar } to=''>
        ⬅ Regresar
      </Link>
      <div className='facturar'>
        <div className='container_form'>
        <h2>Formulario de Pago</h2>
          <form>
            <label>Nombres</label>
            <input type='text' />

            <label>Apellidos</label>
            <input type='text' />

            <label>Número de cedula</label>
            <input type='number' />

            <label>Telefono:</label>
            <input type='tel' />

            <label>Celular</label>
            <input type='tel' />

            <label>Dirección</label>
            <input type='text' />

            
          </form>
        </div>

        <div className='facturar_pago'>
        <form action="https://www.paypal.com/es/cgi-bin/webscr" method="post">
                <input type="hidden" name="cmd" value="_xclick" />

                <input type="hidden" name="business" value="jkastiblanco@gmail.com" />

                <input type="hidden" name="item_name" value="Nombre del producto" />

                <input type="hidden" name="currency_code" value="USD" />

                <input type="hidden" name="amount" value="100" />

                <input type="hidden" name="return" value="http://localhost:3000/tienda/car" />

                <input type="hidden" name="cancel_return" value="http://localhost:3000/tienda/car" />

                <input className='button-img' formTarget='blank' type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_buynowCC_LG.gif" name="submit" alt="PayPal. La forma rápida y segura de pagar en Internet."/>
        </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
