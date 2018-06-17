import { Component } from '@angular/core';

import { DataPage } from '../data/data';
import { TillPage } from '../till/till';
import { PayBossPage } from '../payboss/payboss';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PayBossPage;
  tab3Root = DataPage;
  tab2Root = TillPage;

  constructor() {

  }
}
