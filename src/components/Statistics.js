import PropTypes from 'prop-types';


export const Statistics = ({title, stats}) => {
    return (
 <h2>Upload stats</h2>
 );
};
Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };