
import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    // console.log(option)
    const {name, price, features} = option
    return (
        <div>
        <div className='bg-slate-600 text-center rounded-lg py-4 w-full h-full px-1 flex flex-col' >
             <h1 className='pb-2'>
                <span className='text-5xl font-bold text-sky-400' >$ {price} </span>
                <span  className='text-2xl font-semibold'>/mon</span>
            </h1>
            <h3 className='text-2xl font-bold text-teal-300 my-4'>{name} </h3>
            <div className='flex-grow'>
            {
                features.map((features,idx)=> <Features key={idx} features={features}></Features> )
            }
            </div>
            <div className='mx-5 '>
                <button className='w-full btn bg-sky-500 hover:bg-sky-700 border-none text-white'>Buy Now</button>
            </div>
        </div>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
};

export default PriceOption;