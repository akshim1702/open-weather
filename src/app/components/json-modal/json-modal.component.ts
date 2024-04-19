import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import {Clipboard} from '@angular/cd';
// import copy from 'copy-to-clipboard';

@Component({
  selector: 'app-json-modal',
  templateUrl: './json-modal.component.html',
  styleUrls: ['./json-modal.component.css'],
})
export class JsonModalComponent implements OnInit {
  @Input() weatherDetails: any;

  @ViewChild('copyBtn') copyBtn!: ElementRef;
  handleCopyToggle: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  copyToClipboard() {
    navigator.clipboard.writeText(JSON.stringify(this.weatherDetails,null,2)).then(
      () => {
        if (this.copyBtn && this.copyBtn.nativeElement) {
          this.copyBtn.nativeElement.title = 'copied';
          this.handleCopyToggle = false;
          setTimeout(() => {
            this.handleCopyToggle = true;
            this.copyBtn.nativeElement.title = 'copy';
          }, 5000);
        }
      },
      (err) => {
        console.error('Error copying to clipboard:', err);
      }
    );
  }
}
