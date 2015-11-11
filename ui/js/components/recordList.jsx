import React from 'react';
import { JsonRecord } from './record-types/jsonRecord.jsx';

export class RecordList extends React.Component {

  static propTypes = {
    supportedLabels: React.PropTypes.arrayOf(React.PropTypes.string),
    supportedTags: React.PropTypes.arrayOf(React.PropTypes.string),
    recordType: React.PropTypes.oneOf(['json']),
    records: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.any.isRequired,
    })),
  }

  static defaultProps = {
    recordType: 'json',
  }

  state = {
    selectedRecordId: null,
  }

  _renderRecord(record) {
    const isSelected = this.state.selectedRecordId === record.id;
    if (this.props.recordType === 'json') {
      return <JsonRecord isSelected={isSelected} record={record}/>;
    }
    return null;
  }

  render() {
    const records = this.props.records;
    return (
      <ul className="list-group">
        { records.map(r => {
          return (<li className="list-group-item" key={r.id}>
            {this._renderRecord(r)}
          </li>);
        })}
      </ul>
    );
  }

}
