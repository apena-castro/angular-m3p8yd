import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-lateralTreeNode',
  template: `<p-tree [value]="fundTreeNode.children" layout="horizontal" selectionMode="single" [(selection)]="selectedFile3" >
    <ng-template let-node  pTemplate="fund">
         <app-productStructureNode
        [node]="node">
        </app-productStructureNode>
    </ng-template>
  </p-tree>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class LateralTreeNodeComponent implements OnInit, OnChanges {
  @Input() fundTreeNode: any;

 selectedFile3: TreeNode;

  ngOnInit() {
   console.log('lateralTree',this.fundTreeNode)
  }

  ngOnChanges(){''
  //  console.log(this.selectedFile3)
  }
}
