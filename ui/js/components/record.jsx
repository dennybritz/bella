import React from 'react';
import Mousetrap from 'mousetrap';
import { JsonRecord } from './record-types/jsonRecord.jsx';

const RECORD_FOR_TYPE = {
  json: JsonRecord,
};

export class Record extends React.Component {

  static propTypes = {
    record: React.PropTypes.shape({
      id: React.PropTypes.any.isRequired,
      data: React.PropTypes.object,
      labels: React.PropTypes.array,
      tags: React.PropTypes.array,
    }),
    isSelected: React.PropTypes.bool,
    recordType: React.PropTypes.oneOf(['json']),
    supportedLabels: React.PropTypes.arrayOf(React.PropTypes.string),
    supportedTags: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  componentDidUpdate() {
    if (this.props.isSelected) {
      this._mountKeyboardshortcuts();
    }
  }

  _mountKeyboardshortcuts = () => {
    Mousetrap.bind('l', () => console.log(`${this.props.record.id}`));
  }

  renderLabels() {
    const labels = this.props.record.labels || [];
    return labels.map((label) =>
      <span key={label} className="label label-success">{label}</span>
    );
  }

  renderTags() {
    const tags = this.props.record.tags || [];
    return tags.map((tag) =>
      <span key={tag} className="label label-info">{tag}</span>
    );
  }

  render() {
    const record = this.props.record;
    const isSelected = this.props.isSelected;
    const InnerRecord = RECORD_FOR_TYPE[this.props.recordType];
    return (
      <div className={`bella-record selected-${isSelected}`}>
        <InnerRecord record={record}/>
        <div className="bella-record-labels">
          {this.renderLabels()}
        </div>
        <div className="bella-record-tags">
          {this.renderTags()}
        </div>
      </div>
    );
  }
}
