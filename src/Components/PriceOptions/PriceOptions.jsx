// import React from 'react';
// import PropTypes from 'prop-types';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {"id": 1, "optionName": "Basic Membership", "price": 25, "features": ["Access to gym during staffed hours", "Use of basic gym equipment", "Locker room access"]},
        {"id": 2, "optionName": "Premium Membership", "price": 50, "features": ["24/7 access to the gym", "Use of all gym equipment", "Access to all group classes", "Locker room access", "One free personal training session per month"]},
        {"id": 3, "optionName": "Couples Membership", "price": 80, "features": ["24/7 access to the gym for two individuals", "Use of all gym equipment", "Access to all group classes", "Locker room access", "Two free guest passes per month"]},
        {"id": 4, "optionName": "Family Membership", "price": 100, "features": ["24/7 access to the gym for a family of four", "Use of all gym equipment", "Access to all group classes", "Locker room access", "Four free guest passes per month", "One free personal training session per month"]},
        {"id": 5, "optionName": "Student Membership", "price": 20, "features": ["Access to gym during staffed hours", "Use of basic gym equipment", "Access to select group classes", "Locker room access"]}
    ];
    
    

    return (
        <div>
            <h1 className="text-5xl font-bold ">Best price Option</h1>
            {
                priceOptions.map((option)=> <PriceOption key={option.id} option={option}  ></PriceOption> )
            }
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;