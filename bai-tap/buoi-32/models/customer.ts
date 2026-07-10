import type { CustomerI } from "../types/customerI.js";
import { v7 } from "uuid";

export class Customer implements CustomerI {
    private _id: string = v7();
    private _name: string;
    private _phone: string;
    private _address: string;

    constructor(name: string, phone: string, address: string) {
        this._name = name;
        this._phone = phone;
        this._address = address;
    }

    get id(): string {
        return this._id;
    }
    get phone(): string {
        return this._phone;
    }

    updatePhone(phone: string): void {
        this._phone = phone;
    }
    updateAddress(address: string): void {
        this._address = address;
    }
    updateName(name: string): void {
        this._name = name;
    }
    toString(): string {
        return `Customer: [id: '${this._id}', name: '${this._name}', phone: ${this._phone}, address: ${this._address}]`;
    }
}
