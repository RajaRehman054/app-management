var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PettyCash = new Schema(
	{
		amount: { type: Number, required: true },
		date: { type: Date },
		user: { type: mongoose.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('PettyCash', PettyCash);
