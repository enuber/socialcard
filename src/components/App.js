import React from 'react';
import faker from 'faker';
import CardHolder from './card/CardHolder';
import CardHeader from './card/CardHeader';

class App extends React.Component {

    state = {
        companyName : null,
        randomDate: null,
        product: null,
        firstName: null,
        lastName: null
    }

    componentDidMount() {
        let companyName = faker.company.companyName();
        let randomDate = faker.date.month();
        let product = faker.commerce.productName();
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        this.setState({
            companyName,
            randomDate,
            product,
            firstName,
            lastName
        });
    }

    render() {
        return (
            <CardHolder>
                <CardHeader
                    companyName={this.state.companyName}
                    randomDate={this.state.randomDate}
                    product={this.state.product}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                />
            </CardHolder>
        )
    }
};

export default App;

