import React from 'react';
import { BasicRecord } from './basicRecord.jsx';

export class JsonRecord extends React.Component {

  static propTypes = {
    record: React.PropTypes.object.isRequired,
  }

  render() {
    const prettyJson = JSON.stringify(this.props.record.data, null, 2);
    return (
      <BasicRecord {... this.props.record}>
        <pre><code>{prettyJson}</code></pre>
      </BasicRecord>
    );
  }
}
