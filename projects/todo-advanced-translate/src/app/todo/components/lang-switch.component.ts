import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { MatOptionModule } from '@angular/material/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@ngbracket/ngx-layout/flex';

@Component({
    selector: 'todo-lang-switch',
    templateUrl: './lang-switch.component.html',
    standalone: true,
    imports: [FlexModule, MatCardModule, MatFormFieldModule, MatSelectModule, FormsModule, NgFor, MatOptionModule, TranslateModule]
})
export class LangSwitchComponent {
    public myLang = 'de';
    public languages = [{ code: 'de', name: 'Deutsch' }, { code: 'en', name: 'English' }];

    constructor(private translate: TranslateService) {
        translate.setDefaultLang(this.myLang);
    }

    public onLangChanged(event: MatSelectChange) {
        console.log('lang changed ' + event.value);
        this.translate.use(event.value);
    }
}
