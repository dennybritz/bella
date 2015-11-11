import React from 'react';

export class BasicRecord extends React.Component {

  static propTypes = {
    record: React.PropTypes.shape({
      id: React.PropTypes.any.isRequired,
      data: React.PropTypes.object,
      labels: React.PropTypes.array,
      tags: React.PropTypes.array,
    }),
    children: React.PropTypes.node.isRequired,
    isSelected: React.PropTypes.bool,
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
    const isSelected = this.props.isSelected;
    return (
      <div className={`bella-record bella-basic-record selected-${isSelected}`}>
        {this.props.children}
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
