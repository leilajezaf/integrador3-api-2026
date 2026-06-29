import { MercadoPagoConfig, Preference } from "mercadopago"


export const createpreferenceMP = async (req, res) => {
    const { body } = req
    try {
        const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
        const preference = new Preference(client)

        const response = await preference.create({
            body: {
                ...body,
                back_urls: {
                    success: 'https://integrador3-api-2026.onrender.com/api/checkout/success',
                    failure: 'https://integrador3-api-2026.onrender.com/api/checkout/failure',
                    pending: 'https://integrador3-api-2026.onrender.com/api/checkout/pending'
            },
            auto_return: 'approved' // Redirige solo al terminar el pago con éxito
        }
       });

        res.status(201).json({
            ok: true,
            preferenceId: response.id
        })


    } catch (error) {
        console.error("Error al crear la preferencia de pago:", error)
        res.status(500).json({
            ok: false,
            msg: "Error del servidor. Al crear la preferencia de pago, por favor intenta más tarde."
        })
    }

}