import Accordion from "../../../common/Accordion";

const FilterCars = ({ filters, selectedFilter, setSelectedFilter }: any) => {
    const filterKeys = Object.keys(filters)

    const handleFilterChange = (filter: any, value: any) => {
        setSelectedFilter((prev: any) => ({
            ...prev,
            [filter]: prev[filter]?.includes(value)
                ? prev[filter].filter((item: any) => item !== value)
                : [...(prev[filter] || []), value],
        }));
        console.log(selectedFilter)
    }
    return (<>
        {filterKeys.map((f: any, i: number) => (
            <div key={i}>
                <Accordion title={f} >
                    <ul className="car-filters">
                        {filters[f].map((item: any) => (
                            <li key={item}>
                                <label >
                                    <input
                                        type="checkbox"
                                        value={item}
                                        checked={selectedFilter[f]?.includes(item) || false}
                                        onChange={() => { handleFilterChange(f, item) }}
                                    />
                                    {item}
                                </label>
                            </li>
                        ))}
                    </ul>
                </Accordion>
            </div>
        ))}
    </>)
}

export default FilterCars;