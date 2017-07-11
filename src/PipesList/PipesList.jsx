import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import SpinLoader from '../SpinLoader'

const renderPipe = (pipe, onClick) => (
  <ListGroupItem key={pipe.id} onClick={() => onClick(pipe.id)}>
    {pipe.name}
  </ListGroupItem>
)

const PipesList = ({ data, onClick }) => {
  const { loading, error } = data

  if (loading) return (<SpinLoader />)
  if (error) return (<span>{ error }</span>)

  const { organization: { pipes } } = data

  return (
    <ListGroup>
      { pipes.map((pipe) => renderPipe(pipe, onClick)) }
    </ListGroup>
  )
}

export default PipesList
