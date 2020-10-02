import { Meta } from './Meta';
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

*/

import { Qoute } from './Quote';

export interface Person {
    name: string | {
        first: string;
        middle?: string;
        last: string;
    };
    birth?: Date | string;
    instrests?: string[];
    bio?: string;
    favQoute?: Qoute;
    habits?: string[];
    meta?: Meta;
}

export type People = Person[];