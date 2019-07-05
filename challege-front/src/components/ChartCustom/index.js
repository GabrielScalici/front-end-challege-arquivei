import React from 'react';

import '../../Styles.css';
import { Chart, ArgumentAxis, ValueAxis, LineSeries } from "@devexpress/dx-react-chart-material-ui";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const ChartCustom = (props) => {

    let items = [];
    let count = 0;

    props.data.map((item, index) => {
        items.push({ name: 'Compra ' + count, quantidade: item.QUANTIDADE });
        count++;
    });
    console.log("items");

    const data = [
        { name: 'Page A', pv: 2400, amt: 2400 },
        { name: 'Page B', pv: 1398, amt: 2210 },
        { name: 'Page C', pv: 9800, amt: 2290 },
        { name: 'Page D', pv: 3908, amt: 2000 },
        { name: 'Page E', pv: 4800, amt: 2181 },
        { name: 'Page F', pv: 3800, amt: 2500 },
        { name: 'Page G', pv: 4300, amt: 2100 },
    ];

    return (
        <LineChart
            width={props.width/1.3}
            height={400}
            data={items}
            margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
        >
            <Line
                type='monotone'
                dataKey='quantidade'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
            />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <YAxis />
            <XAxis dataKey='name' />
            <Legend> Compras x Quantidade</Legend>
        </LineChart>
    );
};


export default ChartCustom;