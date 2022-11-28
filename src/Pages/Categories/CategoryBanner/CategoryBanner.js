import React from 'react';
import { DayPicker } from 'react-day-picker';

const CategoryBanner = ({ selectedDate, setSelectedDate }) => {
    return (

        <div className="">
            <div>
                <DayPicker
                    mode='single'
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                />
            </div>
        </div>


    );
};

export default CategoryBanner;