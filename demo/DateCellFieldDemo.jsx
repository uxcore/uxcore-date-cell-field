/**
 * DateCellField Component Demo for uxcore
 * @author AlphaGo88&lt;83268606@qq.com&gt;
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const Table = require('uxcore-table');
const React = require('react');

const DateCellField = require('../src');

const { Constants } = Table;

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  saveRef(refName) {
    const me = this;
    return (c) => {
      me[refName] = c;
    };
  }

  render() {
    const columns = [
      { dataKey: 'startDate', editKey: 'startVal', title: 'Start Date', width: 200, type: 'custom', customField: DateCellField },
      {
        dataKey: 'endDate',
        editKey: 'endVal',
        title: 'End Date',
        width: 200,
        type: 'custom',
        customField: DateCellField,
        config: { locale: 'en-us', placeholder: 'please select date' },
      },
      {
        dataKey: 'action1',
        width: '120',
        title: 'Operation',
        type: 'action',
        actions: [
          {
            title: 'Edit',
            callback: (rowData) => {
              this.table.editRow(rowData);
            },
            mode: Constants.MODE.VIEW,
          },
          {
            title: 'Save',
            callback: (rowData) => {
              this.table.saveRow(rowData);
            },
            mode: Constants.MODE.EDIT,
          },
        ],
      },
    ];

    const renderProps = {
      jsxcolumns: columns,
      jsxdata: {
        data: [
          {
            startDate: '2016-01-02',
            startVal: 1451692800000,
            endDate: '2016-02-07',
            endVal: 1454803200000,
          },
        ],
      },
      actionBar: {
        'action button': () => {
          console.log(this.table.getData());
        },
      },
    };

    return (
      <Table {...renderProps} ref={this.saveRef('table')} />
    );
  }
}

module.exports = Demo;
