export interface IHeader {
    image: string,
    name: string,
    title: string,
    description: string,
    contacts: Array<IContacts>
};

export interface IContacts {
    type: string,
    link: string
};