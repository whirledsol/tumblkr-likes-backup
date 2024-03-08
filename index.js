import {prompt} from './service';

async function run(){
	if(!(await prompt())){return;}
}

run();