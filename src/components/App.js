import React from 'react';
import faker from 'faker';
import CardHolder from './card/CardHolder';
import CardHeader from './card/CardHeader';
import CardMainContent from './card/CardMainContent';

class App extends React.Component {

    state = {
        avatar: null,
        color: null,
        companyName : null,
        firstName: null,
        lastName: null,
        personalPic: null,
        product: null,
        productDesc: null,
        randomDate: null,
        webAddress: null
    }

    componentDidMount() {
        let avatar = faker.image.abstract();
        let color = faker.commerce.color();
        let companyName = faker.company.companyName();
        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let personalPic = faker.image.business();
        let product = faker.commerce.productName();
        let productDesc = faker.company.catchPhrase();
        let randomDate = faker.date.month();
        let webAddress = faker.internet.domainName();
        this.setState({
            avatar,
            color,
            companyName,
            firstName,
            lastName,
            personalPic,
            product,
            productDesc,
            randomDate,
            webAddress
        });
    }

    render() {
        return (
            <CardHolder>
                <CardHeader
                    avatar={this.state.avatar}
                    companyName={this.state.companyName}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    product={this.state.product}
                    randomDate={this.state.randomDate}
                />
                <CardMainContent
                    avatar={this.state.avatar}
                    color={this.state.color}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    personalPic={this.state.personalPic}
                    product={this.state.product}
                    productDesc={this.state.productDesc}
                    webAddress={this.state.webAddress}
                />
            </CardHolder>
        )
    }
};

export default App;

