import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {StarComponent} from '../shared/star/star.component';

@NgModule({

  declarations: [StarComponent],
  imports: [FormsModule, CommonModule],
  exports: [FormsModule, CommonModule, StarComponent],
  providers: []
})

export class SharedModule {}