interface IPhones {
    id: number;
    name: string;
    limit: number;
    color: IPhoneColor[];
    version: IPhoneVersion[];
}

interface IPhoneColor {
    cid: number;
    mark: string;
    title: string;
    img: string;
}

interface IPhoneVersion {
    vid: number;
    mark: string;
    title: string;
    price: number;
}

export type {
    IPhoneVersion,
    IPhoneColor,
    IPhones
}