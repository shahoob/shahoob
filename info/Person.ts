/*
The question mark after the propertys (like birth?: Date | string)
means the property can be undefined, null, 
or anything that dosent look theres anything that the thing holds
*/

// It should give you an example of a typical TypeScript interface.

/*
But shehab! i don't know what you mean by 'TypeScript'!

Ok, here's the website for it
https://www.typescriptlang.org

There's a new version of the site, so just in case
here's the url:
https://www.staging-typescript.org/

*/

import { Qoute } from './Quote';

export interface Person {
    name: string;
    birth?: Date | string;
    instrests?: string[];
    bio?: string;
    favQoute?: Qoute;
    habits?: string[];
}

export type People = Person[];