// import React from 'react';
// import PropTypes from 'prop-types';

import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {"id": 1, "name": "Basic Membership", "price": 25, "features": ["Access to gym during staffed hours", "Use of basic gym equipment", "Locker room access"]},
        {"id": 2, "name": "Premium Membership", "price": 50, "features": ["24/7 access to the gym", "Use of all gym equipment", "Access to all group classes", "Locker room access", "One free personal training session per month"]},
        {"id": 3, "name": "Couples Membership", "price": 80, "features": ["24/7 access to the gym for two individuals", "Use of all gym equipment", "Access to all group classes", "Locker room access", "Two free guest passes per month"]},
        {"id": 4, "name": "Family Membership", "price": 100, "features": ["24/7 access to the gym for a family of four", "Use of all gym equipment", "Access to all group classes", "Locker room access", "Four free guest passes per month", "One free personal training session per month"]},
        {"id": 5, "name": "Student Membership", "price": 20, "features": ["Access to gym during staffed hours", "Use of basic gym equipment", "Access to select group classes", "Locker room access"]},
        {"id": 6, "name": "Senior Membership", "price": 15, "features": ["Access to gym during staffed hours", "Use of basic gym equipment", "Access to select group classes", "Locker room access", "Discounted personal training sessions"]}
    ];
    
    
    

    return (
        <div>
            <h1 className="text-5xl font-bold py-8 text-teal-300  text-center">Best price Option</h1>

            <div className="grid md:grid-cols-3 gap-4 text-white pb-8 w-11/12 mx-auto ">
            {
                priceOptions.map((option)=> <PriceOption key={option.id} option={option}  ></PriceOption> )
            }
            </div>
        </div>
    );
};

PriceOptions.propTypes = {
    
};

export default PriceOptions;