import bg from '../assets/img/bg.webp'
import img23 from '../assets/img/23.webp'
import imgRs1 from '../assets/img/rs1.webp'
import imgRs2 from '../assets/img/rs2.webp'
import imgRs3 from '../assets/img/rs3.webp'
import MapIcon from '../icons/MapIcon'
import MessageIcon from '../icons/MessageIcon'
import { redirectTo } from '../utils'

function Portada() {
    return (
      <section className='container min-h-screen portada' style={{ backgroundImage: `url(${bg})` }}>
        <section className='portada-body'>
            <img className='rs1' src={imgRs1} alt='imgRs1' />
            <img className='rs2' src={imgRs2} alt='imgRs2' />
            <img className='rs3' src={imgRs3} alt='imgRs3' />
            <img className='img-23' src={img23} alt='23' />
            <p className='araceli gold'>Araceli</p>
            <p className='text'>Ven a celebrar conmigo este día tan especial</p>
            <section className='fecha'>
                <section className='dia gold'><p>SÁBADO</p></section>
                <section className='dia_num'><p>30</p></section>
                <section className='mes gold'><p>NOVIEMBRE</p></section>
            </section>
            <button className='confirmar-btn-outlined gold' onClick={() => redirectTo('https://maps.app.goo.gl/2ZNipqUPeDzHizJw9')}>
                <MapIcon />
                <section>
                    <p>En lo de Ate Bodega Shop</p>
                </section>
            </button>
            <button className='confirmar-btn' onClick={() => redirectTo(`https://wa.me/+595984345259?text=${encodeURIComponent('Hola, quiero confirmar mi presencia')}`)}>
                <MessageIcon />
                <section>
                    <p>Confirmar asistencia por WhatsApp</p>
                </section>
            </button>
        </section>
      </section>
    )
}
  
export default Portada