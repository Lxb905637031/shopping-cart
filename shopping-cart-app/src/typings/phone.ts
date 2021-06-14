interface IPhones {
    id: number;
    name: string;
    limit: number;
    color: IPhoneColor[];
    version: IPhoneVersion[];
}

interface IFlatPhones extends IPhones {
    currentColor: IPhoneColor;
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
    IPhones,
    IPhoneColor,
    IPhoneVersion,
    IFlatPhones
}

