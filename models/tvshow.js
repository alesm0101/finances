var mongoose = require('mongoose');

var tvshowSchema = new mongoose.Schema({
	title: 		{ type: String },
	year: 		{ type: Number },
	country: 	{ type: String },
	poster:  	{ type: String },
	seasons: 	{ type: Number },
	genre: 		{
		type: String,
		enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
	},
	summary: 	{ type: String }
});
module.exports = mongoose.model('TVShow', tvshowSchema);

/*
{
"title": "LOST",
"year": 2004,
"country": "USA",
"poster": "http://ia.media-imdb.com/images/M/MV5BMjA3NzMyMzU1MV5BMl5BanBnXkFtZTcwNjc1ODUwMg@@._V1_SY317_CR17,0,214,317_.jpg",
"seasons": 6,
"genre": "Sci-Fi",
"summary": "The survivors of a plane crash are forced to live with each other on a remote island, a dangerous new world that poses unique threats of its own."
}
*/