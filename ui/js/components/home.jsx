import React from 'react';
import { RecordList } from './recordList.jsx';

export class Home extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    const records = [
      { id: 1, data: { text: 'Hi' }, labels: ['positive'], tags: ['ad', 'ignore'] },
      { id: 2, data: { text: 'Hi too' }, labels: ['negative'] },
    ];
    return (
      <div className="bella-home">
      <RecordList records={records}/>
      </div>
    );
  }
}
