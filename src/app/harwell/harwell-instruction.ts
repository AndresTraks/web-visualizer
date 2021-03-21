export class HarwellInstruction {
    static getOperation(entry: number): number {
        return Math.trunc(HarwellInstruction.getOrderCode(entry) / 10000);
    }

    static getAddressA(entry: number): number {
        return Math.trunc(HarwellInstruction.getOrderCode(entry) / 100) % 100;
    }

    static getAddressB(entry: number): number {
        return HarwellInstruction.getOrderCode(entry) % 100;
    }

    static getOrderCode(value: number): number {
        return Math.trunc(value / 1000);
    }
}
