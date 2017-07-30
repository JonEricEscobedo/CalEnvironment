import React from 'react';


class Waste extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  let chart = c3.generate({
    bindto: '#waste',
    data: {
      columns: [
        ['local', 30, 200, 100, 400, 150, 25],
        ['average', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
    },
    size: {
      height: 200
    },
    axis: {
      y: {
        show: false
      }
    }
  });

  setTimeout(function () {
    chart.transform('local', 'average');
  }, 1000);

  setTimeout(function () {
    chart.transform('local', 'average');
  }, 2000);

  setTimeout(function () {
    chart.transform('bar');
  }, 3000);

  setTimeout(function () {
    chart.transform('area');
  }, 4000);
  }



  render() {
    return (
      <div>
       <div id="waste"></div>
      </div>
    )
  }
}


export default Waste;
