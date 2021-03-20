import { Vector3 } from '../graphics/vector3';
import { Indicator } from './indicator';

export class MemoryRegister {
    private currentValue: number;
    private isActive: boolean = false;
    indicators: Indicator[];

    constructor(indicators: Indicator[]) {
        this.indicators = indicators;
    }

    set value(value: number | null) {
        if (this.currentValue === value) {
            return;
        }
        if (value == null) {
            this.setActive(false);
            value = 0;
        } else {
            this.setActive(true);
        }
        this.currentValue = value;

        this.indicators[0].digit = value >= 0 ? 0 : 1;
        for (let i = 1; i < 9; i++) {
            let index = i;
            if (index === 1) {
                index--;
            }
            if (value < 0) {
                index++;
            }
            const digit = Number(value.toFixed(7)[index]);
            this.indicators[i].digit = digit;
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

    private setActive(isActive: boolean) {
        if (this.isActive !== isActive) {
            this.isActive = isActive;
            for (let i = 0; i < 9; i++) {
                this.indicators[i].color = isActive ? Indicator.activeColor : Indicator.passiveColor;
            }
        }
    }
}
