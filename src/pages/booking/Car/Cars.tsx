import { lazy, useEffect, useState, Suspense } from 'react';
import cars from '../../../data/cars.json';
import { detailsApi } from '../../../api/login';


const Car = lazy(() => import('./Car'));
const Book = lazy(() => import('../Book'));
const FilterCars = lazy(() => import('./FilterCars'));

const Cars = () => {
    const [filteredCars, setFilteredCars] = useState(cars);
    const [filter, setFilter] = useState({});
    const [selectedFilter, setSelectedFilter] = useState<any>({});
    useEffect(() => { setFilter(generateFilters()) 
        detailsApi().then(res => {
            console.log('authnticated successfully', res);
        }).catch(({ response = {} }) => console.log('Internal server error. Please try again later'))
    }, [])
    useEffect(() => {
        const filtered = cars.filter((car: any) => {
            return Object.keys(selectedFilter).every(key => {
                if (selectedFilter[key]?.length > 0) { return selectedFilter[key].includes(car[key]) }
                return true;
            })
        });
        setFilteredCars(filtered);
    }, [selectedFilter])

    const generateFilters = () => {
        return {
            company: Array.from(new Set(cars.map(car => car.company))),
            category: Array.from(new Set(cars.map(car => car.category))),
            seat: Array.from(new Set(cars.map(car => car.seat))).sort((a, b) => a - b)
        }
    }
    return (
        <>
            <br />
            <Book />
            <div className="cars-list">
                <div className="filters">
                    <Suspense fallback='Loading Filter...'>
                        <FilterCars filters={filter} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
                    </Suspense>
                </div>
                <div className='cars-list-inner'>
                    <div className='count'>Available Cars - {filteredCars.length ?? 0}</div>
                    <div>
                        {filteredCars.map((car) => (
                            <div key={car.id}>
                                <Suspense fallback='Loading Car...'>
                                    <Car car={car} />
                                </Suspense>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};
export default Cars;