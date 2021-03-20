import { Vector3 } from '../graphics/vector3';
import { Indicator } from './indicator';

export class MemoryRegister {
    private currentValue: number;
    private isActive: boolean = false;
    indicators: Indicator[];
    private hasSignDigit: boolean;

    constructor(indicators: Indicator[]) {
        this.indicators = indicators;
        this.hasSignDigit = indicators.length === 9;
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

        if (this.hasSignDigit) {
            this.indicators[0].digit = this.getSignDigit();
            for (let i = 0; i < 8; i++) {
                this.indicators[i + 1].digit = this.getDigit(i);
            }
        } else {
            for (let i = 0; i < 8; i++) {
                this.indicators[i].digit = this.getDigit(i);
            }
        }
    }

    private getSignDigit(): number {
        return this.currentValue >= 0 ? 0 : 1;
    }

    private getDigit(index: number): number {
        return Math.floor(Math.abs(this.currentValue) * (10**index)) % 10;
    }

    private setActive(isActive: boolean) {
        if (this.isActive !== isActive) {
            this.isActive = isActive;
            for (const indicator of this.indicators) {
                indicator.color = isActive ? Indicator.activeColor : Indicator.passiveColor;
            }
        }
    }
}
