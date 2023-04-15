import React, {useState} from "react";
import Counter from "./counter";

const CounterList = () => {
    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь'},
        {id: 1, value: 4, name: 'Ложка'},
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'},
    ];
    const [counters, setCounters] = useState(initialState);

    const handleIncrement = (id) => {
        const valueIncrement = counters.map((num) => {
            if (num.id === id) {
                return {...num, value: num.value += 1}
            }
            return num
        });

        setCounters(valueIncrement);
        
    }

    const handleDecrement = (id) => {
        const valueDecrement = counters.map((num) => {
            if (num.id === id) {
                return {...num, value: num.value -= 1}
            }
            return num
        });

        setCounters(valueDecrement);
    }


    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id);
        setCounters(newCounters);
    };

    const handleReset = () => {
        setCounters(initialState);
    }

    return (
        <>
            {counters.map((count) => (
                <Counter key = {count.id} onDelete = {handleDelete} {...count} onDecrement = {handleDecrement} onIncrement = {handleIncrement}/>
            ))}
            <button className="btn btn-primary btn-sm m-2" onClick = {handleReset}>
                Сброс
            </button>
        </>
    );
};

export default CounterList;