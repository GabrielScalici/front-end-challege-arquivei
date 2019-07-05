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

    return (
        <LineChart
            width={props.width/1.3}
            height={560}
            data={items}
            margin={{ top: 60, right: 60, left: 60, bottom: 60 }}
        >
            <Line
                type='monotone'
                dataKey='quantidade'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
            />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <YAxis/>
            <XAxis dataKey='name' />
            <Legend> Compras x Quantidade</Legend>
        </LineChart>
    );
};


export default ChartCustom;