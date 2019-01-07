import React from "react";
import { Grid, Row, Col,Thumbnail, Button} from "react-bootstrap";

import '../Styles/Homepage.css';
import '../Styles/General.css';

class News extends React.Component {
    buildNewsItem() {
        let content =[]
        content.push(
            <Grid>
            <Row>
                <Col xs={6} md={4}>
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>
                    &nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>
                    &nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                    <Button bsStyle="primary">Button</Button>
                    &nbsp;
                    <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
                </Col>
            </Row>
        </Grid>
        )
        return content;
    }
    
    render() {
        return (
            <div className="news">
               <div><h1>LASTEST NEWS</h1></div>
               {this.buildNewsItem()}
            </div>
        )
    }
}

export default News;