/*
TypeScript interfaces can also extend like a typical class does

and that could extend to as many you want
cuz maybe interface are for describing objects just like blueprints for a building or whatever
*/

import { Person } from './Person';

export interface Developer extends Person {
    languages: string[];
    favLanguages?: string[];
    runtimes?: string[];
}

export type Developers = Developer[];