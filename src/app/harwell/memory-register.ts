import { Vector3 } from '../graphics/vector3';
import { Indicator } from './indicator';

export class MemoryRegister {
    private static readonly activeIndicatorColor: number[] = [1, 0.2, 0.2, 1];
    private static readonly passiveIndicatorColor: number[] = [0.6, 0.12, 0.12, 1];
    private currentValue: number;
    indicators: Indicator[];

    constructor(indicators: Indicator[]) {
        this.indicators = indicators;
    }

    set value(value: number) {
        if (this.currentValue === value) {
            return;
        }
        this.currentValue = value;

        const color: number[] = value !== 0
            ? MemoryRegister.activeIndicatorColor
            : MemoryRegister.passiveIndicatorColor;

        this.indicators[0].digit = value >= 0 ? 0 : 1;
        this.indicators[0].color = color;
        for (let i = 1; i < 9; i++) {
            let index = i;
            if (index === 1) {
                index--;
            }
            if (value < 0) {
                index++;
            }
            const digit = Number(value.toFixed(7)[index]);
            const indicator: Indicator = this.indicators[i];
            indicator.digit = digit;
            indicator.color = color;
        }
    }

    setIndicatorPositions(origin: Vector3, tubeDistance: number, registerMiddleGap: number): void {
        const position: Vector3 = origin.copy();
        for (let i = 0; i < 5; i++) {
            const indicator: Indicator = this.indicators[i];
            indicator.position = position.copy();
            position.x += tubeDistance;
        }
        position.x += registerMiddleGap;
        for (let i = 5; i < 9; i++) {
            const indicator: Indicator = this.indicators[i];
            indicator.position = position.copy();
            position.x += tubeDistance;
        }
    }
}
