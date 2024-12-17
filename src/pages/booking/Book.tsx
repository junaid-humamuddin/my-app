import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormButton } from "../../common/FormButton";
import AutoComplete from "../../common/AutoComplete";
import cities from '../../data/cities.json';

const Book = () => {

    const [search, setSearch] = useState({
        from: {
            id: '',
            name: '',
            state: ''
        },
        to: {
            id: '',
            name: '',
            state: ''

        }, departure: new Date()
    });
    const [autoComplete, setAutoComplete] = useState({ from: '', to: '' });
    const navigate = useNavigate();

    const formUpdate = ({ value, name }: any) => {
        setAutoComplete({ ...autoComplete, [name]: value.name });
        setSearch({ ...search, [name]: value })
    };
    const submitBooking = (e: any) => {
        e.preventDefault();
        sessionStorage.setItem('booking', JSON.stringify(search));
        navigate('/cars');
    }
    return (
        <form onSubmit={submitBooking} className="search-container">
            <div className="search-box">
                <div className="search-box-inner">
                    <div className="header">From</div>
                    <div className="content">
                        <AutoComplete options={cities}
                            value={autoComplete.from} title='Current Location'
                            type={typeof (cities[0])}
                            filterkeyName='name'
                            showLabel={['name', 'state']}
                            onChange={(from: any) => { setAutoComplete({ ...autoComplete, from }) }}
                            onSelect={(e: string) => formUpdate({ value: e, name: 'from' })}
                        />
                        <h1>{search.from.name}</h1>
                        <h5>{search.from.state}</h5>
                    </div>
                </div>
                <div className="search-box-inner">
                    <div className="header">To</div>
                    <div className="content">
                        <AutoComplete options={cities}
                            value={autoComplete.to} title='Current Location'
                            type={typeof (cities[0])}
                            filterkeyName='name'
                            showLabel={['name', 'state']}
                            onChange={(to: any) => { setAutoComplete({ ...autoComplete, to }) }}
                            onSelect={(e: string) => formUpdate({ value: e, name: 'to' })}
                        />
                        <h1>{search.to.name}</h1>
                        <h5>{search.to.state}</h5>
                    </div>
                </div>
                <div className="search-box-inner">
                    <div className="header">Depature</div>
                    <div className="content">
                        <h1>Today</h1>
                        <h5>{new Date().toLocaleDateString()}</h5>
                    </div>
                </div>
            </div>
            <FormButton type='submit'> Book Now</FormButton>
        </form>
    )
}
export default Book;