import { NgModule } from '@angular/core';
import { TypeAheadComponent } from './type-ahead/type-ahead';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [TypeAheadComponent],
	imports: [CommonModule],
	exports: [TypeAheadComponent]
})
export class ComponentsModule {}
