import { useId } from 'react';
import './Filters.css'
import { useFilters } from '../hooks/useFilters';

export function Filters () {
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const { filters, setFilters } = useFilters()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId}>Precio mínimo:</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Notebooks</option>
                    <option value="home-decoration">Decoracion de hogar</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}