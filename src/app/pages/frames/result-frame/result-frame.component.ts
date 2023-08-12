import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-result-frame',
  templateUrl: './result-frame.component.html',
  styleUrls: ['./result-frame.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatExpansionModule],
})
export class ResultFrameComponent {
  @Input()
  public url!: string;

  panelOpenState = false;

  urlSafe!: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
