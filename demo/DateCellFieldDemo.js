/**
 * DateCellField Component Demo for uxcore
 * @author AlphaGo88&lt;83268606@qq.com&gt;
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

let Table = require('uxcore-table');
let { Constants } = Table;
let DateCellField = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        let columns = [
            { dataKey: 'startDate', title: 'Start Date', width: 200, type: 'custom', customField: DateCellField },
            { dataKey: 'endDate', title: 'End Date', width: 200, type: 'custom', customField: DateCellField, 
                config: {locale: 'en-us', placeholder: 'please select date' }
            },
            { dataKey: 'action1', width: '120', title: 'Operation', type: 'action', actions: [
                {
                    title: 'Edit',
                    callback: (rowData) => {
                        this.refs.grid.editRow(rowData);
                    },
                    mode: Constants.MODE.VIEW
                },
                {
                    title: 'Save',
                    callback: (rowData) => {
                        this.refs.grid.saveRow(rowData);
                    },
                    mode: Constants.MODE.EDIT
                }
            ]}
        ];

        let renderProps = {
            jsxcolumns: columns,
            actionBar: {
               'action button': () => { 
                   console.log(this.refs.grid.getData())
                }
            }
        };

        return (
            <Table {...renderProps} ref="grid" />
        );
    }
};

module.exports = Demo;
