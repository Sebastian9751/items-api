import { ItemModel } from '../models/item.model.js';

const findAll = async (req, res) => {
	try {
		const data = await ItemModel.findAll({
			order: [
				['id_item', 'DESC'], 
			],
		});

		return res.status(200).json({ items: data });
	} catch (error) {
		console.error('error', error.message);
		res.status(500).json({ error: 'Internal server error ' });
	}
};

const create = async (req, res) => {
	try {
		const data = req.body;
		const dataFound = await ItemModel.findOne({ where: { name: data.name } });

		if (dataFound) {
			return res
				.status(209)
				.json({ error: `The name '${data.name}' is alredy use` });
		}

		await ItemModel.create(data);

		return res.status(200).json({ message: 'Item has been created' });
	} catch (error) {
		console.error('error', error.message);
		res.status(500).json({ error: 'Internal server error ' });
	}
};

const update = async (req, res) => {
	try {
		const data = req.body;
		const idItem = req.params.id;

		const dataFound = await ItemModel.findOne({
			where: { id_item: idItem },
		});
		const nameFound = await ItemModel.findOne({ where: { name: data.name } });

		if (!dataFound) {
			return res.status(404).json({ error: `Item not found` });
		}

		if (nameFound && nameFound.dataValues.id_item != idItem) {
			return res
				.status(209)
				.json({ error: `The name '${data.name}' is alredy use` });
		}

		await ItemModel.update(data, { where: { id_item: idItem } });

		return res.status(200).json({ message: 'Item has been updated' });
	} catch (error) {
		console.error('error', error.message);
		res.status(500).json({ error: 'Internal server error ' });
	}
};

export const methods = {
	findAll,
	create,
	update,
};
