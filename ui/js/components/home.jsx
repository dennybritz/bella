import React from 'react';
import { RecordList } from './recordList.jsx';

export class Home extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    const records = [
      { id: 1, text: 'Hi' },
      { id: 2, text: 'Hi too' },
    ];
    return (
      <div className="bella-home">
      <RecordList records={records}/>
      </div>
    );
  }
}
