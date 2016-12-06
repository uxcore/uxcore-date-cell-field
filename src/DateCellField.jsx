/**
 * DateCellField Component for uxcore
 * @author AlphaGo88&lt;83268606@qq.com&gt;
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const assign = require('object-assign');
const Calendar = require('uxcore-calendar');
const React = require('react');
const CellField = require('uxcore-cell-field');


class DateCellField extends CellField {

  renderContent() {
    const me = this;
    const config = me.props.column.config;
    const propsToDelete = ['value', 'data', 'onChange'];
    const fieldProps = {
      value: me.props.value,
      onSelect(value, formatDateString) {
        me.handleDataChange({
          text: formatDateString,
          value,
        });
        if (config && config.onSelect) {
          config.onSelect(value, formatDateString);
        }
      },
    };
    if (config) {
      const customProps = { ...config };
      propsToDelete.forEach((item) => {
        delete customProps[item];
      });
      assign(fieldProps, customProps);
    }
    return (
      <Calendar {...fieldProps} />
    );
  }
}

DateCellField.propTypes = assign({}, CellField.propTypes);
DateCellField.defaultProps = assign({}, CellField.defaultProps);

module.exports = DateCellField;
