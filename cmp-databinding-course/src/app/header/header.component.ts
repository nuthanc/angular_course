import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
  }
  // My Implementation
  // @Output() linkClick = new EventEmitter<string>();
  // onLinkClick(input: any) {
  //   const text = input.target.innerText;
  //     this.linkClick.emit(text)
  // }

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
