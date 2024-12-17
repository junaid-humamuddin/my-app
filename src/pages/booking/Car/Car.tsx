import carLogo from '../../../assets/car.png';
import { useNavigate } from 'react-router-dom';
const Car = ({ car}: any) => {

    const navigate = useNavigate();
    const submitCheckout = (car: any) => {
        sessionStorage.setItem('checkout', JSON.stringify(car));
        navigate('/summary');
    }

    return (
        <div className='car-item'>
            <div className="car-logo">
                <img src={carLogo} alt="" />
            </div>
            <div className="car-data">
                <div className="header">
                    <div className='title'>
                        <h2>{car.company}</h2>
                        <button type='button' onClick={() => { submitCheckout(car) }} className='form-button btn-md btn-w-auto'>Checkout</button>
                    </div>
                    <div className="bullets">
                        <span>{car.model}</span>
                        <span>AC</span>
                        <span>{car.seat} Seats</span>
                    </div>
                </div>
                <div className="car-data-inner">
                    <div className="title">Large Car</div>
                    <div className="car-data-inner-content">
                        <div className="item">
                            <div>Fare Per Km </div>
                            <div>₹{car.farePerKm}/km</div>
                        </div>
                        <div className="item"><div>Fuel Type </div><div>{car.fuelType}</div></div>
                        <div className="item"><div>Transmission </div><div>{car.transmission}</div>
                            <div>Availability </div><div>{car.availabilityStatus ? 'Available' : 'Booked'}</div></div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Car;