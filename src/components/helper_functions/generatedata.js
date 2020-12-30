import faker from 'faker';

export const generateList = () => {
    const randomLengthArr = new Array(faker.random.number({min: 1, max: 25})).fill();
    const data = randomLengthArr.map(()=>
        ({
            avatar: faker.image.abstract(),
            color : faker.commerce.color(),
            companyName : faker.company.companyName(),
            firstName : faker.name.firstName(),
            lastName : faker.name.lastName(),
            personalPic : faker.image.business(),
            product : faker.commerce.productName(),
            productDesc : faker.company.catchPhrase(),
            randomDate : faker.date.month(),
            webAddress : faker.internet.domainName(),
        })
    );
    return data;
};

