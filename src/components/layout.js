import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
)



