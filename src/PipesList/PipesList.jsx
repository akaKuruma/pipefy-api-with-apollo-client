import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import SpinLoader from '../SpinLoader'

const renderPipe = (pipe) => (
  <ListGroupItem key={pipe.id}>
    {pipe.name}
  </ListGroupItem>
)

const PipesList = ({ data }) => {
  const { loading, error } = data

  if (loading) return (<SpinLoader />)
  if (error) return (<span>{ error }</span>)

  const { organization: { pipes } } = data

  return (
    <ListGroup>
      { pipes.map((pipe) => renderPipe(pipe)) }
    </ListGroup>
  )
}

export default PipesList
