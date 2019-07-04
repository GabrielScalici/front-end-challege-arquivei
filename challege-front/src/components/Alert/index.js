import React from 'react';
import { Container } from 'react-bootstrap'


const Alert = (props) => {
    if (props.status === 'error') {
        return (
            <Container>
                <Alert variant="danger">
                    <Alert.Heading>OPS, PARECE QUE HOUVE UM ERRO!</Alert.Heading>
                    <p>
                        Faça todos os cadastros corretamente antes de presseguir com a operação
                    </p>
                </Alert>
            </Container>
        );
    }
    if (props.status === 'done') {
        return (
            <Container>
                <Alert show={this.state.show} variant="success">
                    <Alert.Heading>Parabéns!</Alert.Heading>
                    <p>
                        Aproveite, pois você acaba de comprar mais consultas.
                    </p>
                </Alert>
            </Container>
        );
    }
    else {
        return (
            <div>
            </div>
        );
    }
};

export default Alert;