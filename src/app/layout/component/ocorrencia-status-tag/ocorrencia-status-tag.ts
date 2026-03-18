import { Component, input } from '@angular/core';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-ocorrencia-status-tag',
  imports: [TagModule],
  templateUrl: './ocorrencia-status-tag.html',
})
export class OcorrenciaStatusTag {
  status = input<boolean>();

}
