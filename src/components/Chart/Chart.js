import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
    const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
    const totalExpense = Math.max(...dataPointsValues)

    return (
        <div className='chart'>
            {dataPoints.map((datapoint) => {
                return <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalExpense}
                    label={datapoint.label}
                />
            })}
        </div>

    )

};

export default Chart;