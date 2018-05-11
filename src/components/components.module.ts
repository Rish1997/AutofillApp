import { NgModule } from '@angular/core';
import { TypeAheadComponent } from './type-ahead/type-ahead';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
	declarations: [TypeAheadComponent],
	imports: [CommonModule, NgbModule],
	exports: [TypeAheadComponent]
})
export class ComponentsModule {}
