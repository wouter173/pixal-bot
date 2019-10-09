const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	prefix: { type: String, default: "!" },
});

const model = mongoose.model("guilds", schema);

module.exports.set = async (msg, data) => {
	let res = await model.findOne({ "id": msg.guild.id }, (_err, res) => { return res; });
	if (res === null) {
		let temp = new model();
		temp.id = msg.guild.id;
		temp.name = msg.guild.name;
		temp.prefix = data.prefix;
		temp.save();
		return temp;
	} else {
		return model.updateOne({ id: msg.guild.id }, data);
	}
};

module.exports.get = (id) => {
	let res = model.findOne({ "id": id }, (_err, res) => {return res;});
	return res;
};