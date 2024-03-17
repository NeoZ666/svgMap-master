// React
import React, { Component } from 'react';
import './App.css';

// svgMap
import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';

class App extends Component {

  componentDidMount() {
    if (!this.svgMap) {

      var mySvgMap = new svgMap({
        targetElementID: 'svgMap',
        data: {
          data: {
            RCDI: {
              name: 'Relative Cultural Distance Index : ',
              format: '{0}'
            }
          },
          applyData: 'RCDI',
          values: {
            'SE' : {RCDI: 0.0},
            'NO' : {RCDI: 0.5},
            'FI' : {RCDI: 1.0},
            'GB' : {RCDI: 1.5},
            'DE' : {RCDI: 2.0},
            'US' : {RCDI: 2.5},
            'PL' : {RCDI: 3.0},
            'IL' : {RCDI: 3.5},
            'GR' : {RCDI: 4.0},
            'HR' : {RCDI: 4.5},
            'CL' : {RCDI: 5.0},
            'BA' : {RCDI: 5.5},
            'RU' : {RCDI: 6.0},
            'RS' : {RCDI: 6.5},
            'TR' : {RCDI: 7.0},
            'IR' : {RCDI: 7.5},
            'CN' : {RCDI: 8.0},
            'IQ' : {RCDI: 8.5},
            'SO' : {RCDI: 9.0}
          }
        }
      });

      this.svgMap = mySvgMap;
    }
  }

  render() {
    return (
      <div className='app'>
        <h1>svgMap React demo</h1>
        <div id='svgMap'></div>
      </div>
    );
  }
}

export default App;
