import { useState } from 'react'

import '../styles/HomePage.css'

function HomePage() {
    const [value, setValue] = useState(0)
    return (
        <div className="home-page">
            <h1>{value}</h1>
            <p>Valor do contador</p>
            <div className="row-btns">
                <button
                    className="action-btn decrease"
                    onClick={() => setValue(value - 1)}
                >
                    Diminuir
                </button>
                <button
                    className="action-btn increase"
                    onClick={() => setValue(value + 1)}
                >
                    Aumentar
                </button>
            </div>
        </div>
    )
}

export default HomePage
