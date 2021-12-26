import React, { useState } from 'react'
import { Card, CardBody, Button, Row, Col, FormGroup, Label, Input, Form } from "reactstrap"
import { useDispatch } from 'react-redux'
import { addPost } from "./../../redux/actions/postsActions";

export default function FormCardItemList() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('Happy new year')
    const [body, setBody] = useState('Santa-clause love girls')

    const submitForm = (e) => {
        e.preventDefault()

        const post = {
            title, body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post)
        })

        .then(response => response.json())
        .then(data => {
            const { id } = data
            dispatch(addPost({ title, body, id }))
        })
    }

    return (
        <>
            <Card>
                <CardBody>
                    <Form onSubmit={(e) => submitForm(e)}>
                        <FormGroup>
                            <Label for="postTitle">
                                Title
                            </Label>
                            <Input
                                id="postTitle"
                                name="title"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormGroup>
                        <Row form>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="postDescription">
                                        Description
                                    </Label>
                                    <Input
                                        id="postDescription"
                                        name="description"
                                        placeholder="Description"
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button>
                            Add Post
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}
