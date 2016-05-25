/**
 * DateCellField Component for uxcore
 * @author AlphaGo88&lt;83268606@qq.com&gt;
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

"use strict";

const assign = require('object-assign');
const Table = require('uxcore-table');
const Calendar = require('uxcore-calendar');
const { CellField } = Table;

class DateCellField extends CellField {

    constructor(props) {
        super(props);
    }

    renderContent() {
        let me = this;
        let config = me.props.column.config;
        let fieldProps = {
            value: me.props.value,
            onSelect: function(value, formatDateString) {
                me.handleDataChange({
                    jsxid: me.props.rowData['jsxid'],
                    column: me.props.column,
                    text: formatDateString,
                    value: formatDateString
                });
                if (config && config.onSelect) {
                    config.onSelect(value, formatDateString);
                }
            }
        };
        if (config) {
            let {value, onSelect, ...customProps} = config;
            assign(fieldProps, customProps);
        }
        return <Calendar {...fieldProps} />
    }
}

DateCellField.propTypes = assign({}, CellField.propTypes);
DateCellField.defaultProps = assign({}, CellField.defaultProps);

module.exports = DateCellField;