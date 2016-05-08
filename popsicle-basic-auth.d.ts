declare function popsicleBasicAuth (username: string, password: string): (req: any, next: () => any) => any;

export = popsicleBasicAuth;
