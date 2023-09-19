import PropTypes from 'prop-types'
import { BiSolidBadgeCheck } from "react-icons/bi";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='text-left flex items-center gap-2'><BiSolidBadgeCheck className='text-green-600'></BiSolidBadgeCheck> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;