import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14200},
  {quarter: 4, earnings: 19000},
]

class Main extends Component {
  render() { 
    return ( 
      <div>
        <h1>Victory Tutorial</h1>
        <VictoryChart
          domainPadding={10}
        >
        <VictoryAxis
          tickValues={
            ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']
          }
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
          <VictoryBar
            data={data}
            x={'quarter'}
            y={'earnings'}
          />
        </VictoryChart>
      </div>
     );
  }
}
 
const app = document.getElementById('app');
ReactDOM.render(<Main />, app);