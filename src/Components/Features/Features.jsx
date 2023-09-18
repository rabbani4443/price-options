
import PropTypes from 'prop-types';
import { AiOutlineCheck } from 'react-icons/ai';

const Features = ({features}) => {
    return (
        <div>
            <h1 className=' flex items-center justify-center mb-4 text-lg font-semibold'> <span className='text-sky-500 pr-1'><AiOutlineCheck></AiOutlineCheck> </span>{features}</h1>
        </div>
    );
};

Features.propTypes = {
    features:PropTypes.string
};

export default Features;