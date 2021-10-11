
const garageSchema = new Schema({
	car: {
		type: Schema.Types.ObjectId,
        ref: 'Car'
	},
	user: {
		type: Schema.Types.ObjectId,
        ref: 'User'
	},
});