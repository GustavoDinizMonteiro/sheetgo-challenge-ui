import React from 'react'
import { Modal, ModalHeader, ModalBody, Form, Input, FormGroup, Button } from 'reactstrap'
import { connect } from 'react-redux'

const BookModal = ({ show, toggle, title='', description='', author='', category, onChange, submit, categories }) => {
  const disabled = !title.trim() || !description.trim() || !author.trim()
  return (
    <Modal isOpen={show} toggle={toggle}>
      <ModalHeader toggle={toggle}>Crie um novo livro</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>            
            <Input placeholder='Adicione um titulo'
              name='title' value={title} onChange={onChange}/>
            <Input type='textarea' placeholder='Adicione uma descrição'
              name='description' value={description} onChange={onChange}/>
            <Input placeholder='Adicione o autor'
              name='author' value={author} onChange={onChange}/>
          </FormGroup>
          <FormGroup>
            <Input type='select' name='category' value={category} onChange={onChange}>
              <option>Sem categoria</option>
              { categories.data.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.name}</option>
              ))}
            </Input>
          </FormGroup>
          <Button color={disabled ? 'secondary': 'success'}
            disabled={disabled} onClick={submit}>
            Cadastrar
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  )
}

const stateToProps = state => ({ 
  categories: state.categories 
})
export default connect(stateToProps)(BookModal)