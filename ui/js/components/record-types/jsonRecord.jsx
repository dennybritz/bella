import React from 'react';

export class JsonRecord extends React.Component {

  static propTypes = {
    record: React.PropTypes.object.isRequired,
  }

  render() {
    const prettyJson = JSON.stringify(this.props.record.data, null, 2);
    return (
      <div className="bella-json-record">
        <pre><code>{prettyJson}</code></pre>
      </div>
    );
  }
}
