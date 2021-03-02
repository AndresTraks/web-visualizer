export class HarwellInstruction {
    static getOperation(entry: number): number {
        return Math.floor(entry);
    }

    static getAddressA(entry: number): number {
        return Math.floor(HarwellInstruction.getOrderCode(entry) / 100) % 100;
    }

    static getAddressB(entry: number): number {
        return HarwellInstruction.getOrderCode(entry) % 100;
    }

    private static getOrderCode(value: number): number {
        return Math.round(value * 100000) / 10;
    }
}
