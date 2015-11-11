import React from 'react';

export class RecordList extends React.Component {

  static propTypes = {
    records: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.any.isRequired,
    })),
  }

  render() {
    const records = this.props.records;
    return (
      <ul className="list-group">
        { records.map(r => {
          return (<li className="list-group-item" key={r.id}>{JSON.stringify(r)}</li>);
        })}
      </ul>
    );
  }
}
