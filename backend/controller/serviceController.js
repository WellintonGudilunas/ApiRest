const serviceModel = require("../models/Service");

const serviceController = {
    create: async(req, res) => {
        try {
            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image
            };

            const response = await serviceModel.create(service);
            
            res.status(201).json({ response, msg: "Serviço Criado com sucesso!" });

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = serviceController;