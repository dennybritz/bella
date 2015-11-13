import React from 'react';
import Mousetrap from 'mousetrap';

export class TagModal extends React.Component {

  static propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    tags: React.PropTypes.array.isRequired,
    onChoose: React.PropTypes.func.isRequired,
  }

  static state = {
    isVisible: false,
  }

  componentDidMount() {
    const modalId = this.props.id;
    $(`#${modalId}`).on('shown.bs.modal', () => this.setState({isVisible: true}));
    $(`#${modalId}`).on('hidden.bs.modal', () => this.setState({isVisible: false}));
  }

  componentDidUpdate() {
    const tags = this.props.tags;
    if (this.state && this.state.isVisible) {
      _.forEach(tags, (_, n) => Mousetrap.bind(`${n}`, this._pickElementAt.bind(this, n)));
    } else {
      _.forEach(tags, (_, n) => Mousetrap.unbind(`${n}`));
    }
  }

  _pickElementAt = (idx) => {
    if (idx >= this.props.tags.length) {
      return null;
    }
    const element = this.props.tags[idx];
    const modalId = this.props.id;
    $(`#${modalId}`).modal('hide');
    this.props.onChoose(element, idx);
  }

  renderTags() {
    const tags = this.props.tags;
    return (
      <div className="btn-group-vertical" role="group">
        {tags.map( (tag, idx) =>
          <button key={`tag-${tag}`}
            type="button"
            className="bella-tag-button btn btn-default btn-block"
            onClick={this._pickElementAt.bind(this, idx)}>
            ({idx}) {tag}
          </button>
        )}
      </div>
    );
  }

  render() {
    const modalId = this.props.id;
    const modalTitle = this.props.title;
    return (
      <div className="modal bella-tag-modal" id={modalId}>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{modalTitle}</h4>
            </div>
            <div className="modal-body text-center">
              {this.renderTags()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
