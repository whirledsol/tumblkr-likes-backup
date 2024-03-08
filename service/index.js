import {read} from '../util/interface.js'
import config from '../config.js';
/**
 * prompt
 * @returns 
 */
export const prompt = async () =>{
	let input = null;
	while(input?.toLowerCase() !== 'y'){
		input = await read('Have you read all the assumptions and configured config.js? Y/n');
	}
	input = null;
	while(input?.toLowerCase() !== 'y'){
		input = await read(`Do these settings look good?\n\n${JSON.stringify(config)}\n\nY/n`);
	}

	return true;
}