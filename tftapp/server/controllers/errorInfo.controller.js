import { errorInfoDB } from "../db/db.js";
import { profileErrorModel, argumentErrorModel, traitsErrorModel, unitsErrorModel, itemsErrorModel } from "../shemas/errorSchema.js";

export const errorInfoController = async (req, res) => {
    try {
        let queryParams = req.body;
        console.log('HEY', queryParams.type );
        
        let data = errorInfoDB(queryParams)
        let errors = '';
        switch (queryParams.type) {
            case 'profileIcon':
                errors = await profileErrorModel.create(data)
                break;
            case 'matchesProfileIcon':
                errors = await profileErrorModel.create(data)
                break;
            case 'argumentIcon':
                errors = await argumentErrorModel.create(data)
                break;
            case 'traitsIcon':
                errors = await traitsErrorModel.create(data)
                break;
            case 'championsIcon':
                errors = await unitsErrorModel.create(data)
                break;
            case 'itemIcon':
                errors = await itemsErrorModel.create(data)
                break;
        }
        //const error = new errorModel({playerName: req.body.playerName, serverValue: req.body.serverValue, 
            //type: req.body.type, errorData: req.body.errorData}, true)
        //await errorModel.save;
        res.status(200).json(errors)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}