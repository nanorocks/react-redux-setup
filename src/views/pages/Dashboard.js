import React, { useEffect } from 'react'
import { Row, Col, Container } from "reactstrap";
import { CardItemList, FormCardItemList } from "./../components/_index";
import { useSelector, useDispatch } from 'react-redux'
import { readPosts } from "./../../redux/actions/postsActions";

export default function Dashboard() {
    const posts = useSelector((state) => state.postsReducer.posts)
    const dispatch = useDispatch()

    const loadPosts = () => fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => dispatch(readPosts(data)))

    useEffect(() => {
        loadPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Container className="pt-5">
                <Row>
                    <Col>
                        <h1 className="display-3">Create Posts</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} lg={3} sm={6} xs={12} className="mb-4" >
                        <FormCardItemList></FormCardItemList>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className="display-3">All Posts</h1>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    {posts.map((item, index) => {
                        return (
                            <Col md={4} lg={3} sm={6} xs={12} className="mb-4" key={index}>
                                <CardItemList item={item}></CardItemList>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
