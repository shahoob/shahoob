/*
the "[service: string]" is like a wildcard
*/

export interface Meta {
    websites?: URL[];
    emails?: string[];
    social?: {
        [service: string]: URL;
    };
}