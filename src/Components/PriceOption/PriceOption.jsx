import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-indigo-200 rounded-md p-6 text-center flex flex-col'>
            <h3 className='text-3xl font-semibold'>{name}</h3>
            <h3 className='my-5'>
                <span className='text-4xl font-extrabold'>{price}</span>
                <span className='text-xl font-semibold'>$/month</span>
            </h3>
            <div className='flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-10 py-2 w-full bg-indigo-700 text-white font-bold rounded-md hover:bg-indigo-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;