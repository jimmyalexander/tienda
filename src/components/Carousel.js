import React from 'react';
import { useSelector } from 'react-redux';


export const Carousel = () => {
  const { filtros } = useSelector(state => state.filtros);
  return (
    <div className={  filtros.length === 114 ?  'component_caroulsel ': 'component_caroulsel desaparece'}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://firebasestorage.googleapis.com/v0/b/fruver-cdd40.appspot.com/o/promociones%2Fpromo1.jpg?alt=media&token=d4e61091-2047-438e-8027-f9b1047a64cc" className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block">
            <h5>Del campo a su hogar</h5>
            <p>Contamos con los mejores productos en precio y calidad</p>
          </div>
        </div>

      <div className="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/fruver-cdd40.appspot.com/o/promociones%2Fpromo2.jpg?alt=media&token=f2078bc2-3d4a-4167-8cec-c89327208ab3" className="d-block w-100" alt="..." />
        <div className="carousel-caption  d-md-block">
          <h5>Llena tu Canasta</h5>
          <p>Con lo mejor de los productos nacionales</p>
        </div>
      </div>

      <div className="carousel-item">
        <img src="https://firebasestorage.googleapis.com/v0/b/fruver-cdd40.appspot.com/o/promociones%2Fpromo4.jpg?alt=media&token=ff6e2451-5274-427f-bf8e-b3692fd241e1" className="d-block w-100" alt="..." />
        <div className="carousel-caption  d-md-block">
          <h5>50%</h5>
          <p> de descuento en milanesa</p>
        </div>
      </div>
    </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
</div>
    </div>
  )
}
