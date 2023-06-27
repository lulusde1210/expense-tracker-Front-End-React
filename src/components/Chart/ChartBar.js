import './ChartBar.css';


const ChartBar = ({ label, value, maxValue }) => {
    let barFillHeight = '0%';
    if (maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%'
    };

    const styles = { height: barFillHeight }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={styles}></div>
            </div>
            <div className='chart-bar__value'>{label}</div>
        </div>
    )

};

export default ChartBar;