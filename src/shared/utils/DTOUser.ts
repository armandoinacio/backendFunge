export const DTOUser = (body: any): any => {

    return {
        name: body.name,
        phone: body.phone,
        password: body.password,
        neibor: body.neibor,
        municipaly: body.municipaly,
        group: body.group,
        frequency: body.frequency,
        deliveryMethod: body.deliveryMethod,
        deliveryAddress: body.deliveryAddress,
        payment: body.payment,
        paymentModel: body.paymentModel,
        cautions: body.cautions,
        newsletter: body.newsletter
        }

}