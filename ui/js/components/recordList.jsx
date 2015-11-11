import React from 'react';
import Mousetrap from 'mousetrap';
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
    selectedRecordIndex: -1,
  }

  componentDidMount() {
    Mousetrap.bind('j', this._selectNextRecord);
    Mousetrap.bind('k', this._selectPrevRecord);
  }

  _selectNextRecord = () => {
    const currentIndex = this.state.selectedRecordIndex;
    const nextIndex = Math.min(currentIndex + 1, this.props.records.length - 1);
    this.setState({
      selectedRecordIndex: nextIndex,
    });
  }

  _selectPrevRecord = () => {
    const currentIndex = this.state.selectedRecordIndex;
    const nextIndex = Math.max(currentIndex - 1, 0);
    this.setState({
      selectedRecordIndex: nextIndex,
    });
  }

  _renderRecord(record, idx) {
    const isSelected = this.state.selectedRecordIndex === idx;
    if (this.props.recordType === 'json') {
      return <JsonRecord isSelected={isSelected} record={record}/>;
    }
    return null;
  }

  render() {
    const records = this.props.records;
    return (
      <ul className="list-group">
        { records.map((r, idx) => {
          return (<li className="list-group-item" key={r.id}>
            {this._renderRecord(r, idx)}
          </li>);
        })}
      </ul>
    );
  }

}
