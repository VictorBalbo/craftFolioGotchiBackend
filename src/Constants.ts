const AUTHORIZATION_HEADER = process.env.AUTHORIZATION_HEADER
// tslint:disable-next-line:max-line-length
const DATABASE_URL = process.env.MONGODB_URI || 'mongodb://heroku_8b9mhfm2:1usmgapuh2hg7o7jji06rdr66v@ds215961.mlab.com:15961/heroku_8b9mhfm1'
const ENCODING = process.env.ENCODING || 'base64'
const ADDRESS = process.env.ADDRESS

export const CONSTANTS = {
	AUTHORIZATION_HEADER,
	DATABASE_URL,
	ENCODING,
	ADDRESS,
}
