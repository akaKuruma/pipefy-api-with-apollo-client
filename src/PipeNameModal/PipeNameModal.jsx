import React, { Component } from 'react';
import {
  Modal,
  form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap';

class PipeNameModal extends Component {
  constructor(props) {
    super(props);

    const { data: { onePipe: { name, id }}} = props

    this.state = {
      pipeName: name,
      pipeId: id
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({pipeName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        pipeId: this.state.pipeId,
        name: this.state.pipeName
      }
    }).then(() => this.props.closeModal())
  }

  renderNameForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Pipe name:</ControlLabel>

          <FormControl
            type="text"
            value={this.state.pipeName}
            placeholder="Pipe name"
            onChange={this.handleChange}
          />
          <Button type="submit">
            Update
          </Button>

          <a
            href='#cancel'
            className='btn btn-danger'
            onClick={this.props.closeModal}
          >Cancel</a>
        </FormGroup>
      </form>
    )
  }

  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Body>
            { this.renderNameForm() }
          </Modal.Body>
        </Modal.Dialog>
      </div>
    )
  }
}

export default PipeNameModal
