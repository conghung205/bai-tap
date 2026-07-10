export interface CustomerI {
    updatePhone(phone: string): void;
    updateAddress(address: string): void;
    updateName(name: string): void;
    toString(): string;
}
