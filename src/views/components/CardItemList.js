import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, Button, CardTitle } from "reactstrap"
import { useDispatch } from 'react-redux'
import { deletePost } from "./../../redux/actions/postsActions";

export default function CardItemList({ item }) {
    const dispatch = useDispatch()
    return (
        <>
            <Card className="h-100">
                <CardBody>
                    <CardTitle tag="h5">
                        {item.title}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                    </CardSubtitle>
                    <CardText>
                        {item.body}
                    </CardText>
                    <Button color={'danger'} size={'sm'} onClick={() => dispatch(deletePost(item))}>
                        Remove Post
                    </Button>
                </CardBody>
            </Card>
        </>
    )
}
