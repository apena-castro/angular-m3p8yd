import { Component, Input, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-line',
  template: `<div class="line">

                <ng-container  *ngFor="let nodeChild of node.children">
                  <app-lateralTreeNode [fundTreeNode]="nodeChild">
                  </app-lateralTreeNode>
                  </ng-container>

              </div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class LineComponent implements OnInit {
  @Input() node: TreeNode;

  ngOnInit() {
    console.log('childrens', this.node)
  }
}
