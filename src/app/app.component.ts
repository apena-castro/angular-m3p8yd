import {Component,OnInit,ViewEncapsulation} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: [ './app.component.css' ],
   encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit   {
data1: TreeNode[];

    data2: TreeNode[];

    selectedNode: TreeNode;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
       this.data1 = [{
    label: 'IG',
    type: 'general-info',
    styleClass: 'general-info-node',
    expanded: true,
    data: {
        name: 'Información General'
    },
    children: [{
        label: 'T',
        type: 'rate',
        styleClass: 'rate-node',
        expanded: true,
        data: {
            name: 'Tarifa',
            code: '10110'
        },
        children: [{
            label: '',
            type: 'line',
            children: [{
                    label: 'Relacion 1',
                    type: 'fundRoot',
                    expanded: true,
                    styleClass: 'fund-node',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'AA1'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                {
                    label: 'Relacion 2',
                    type: 'relation',
                    expanded: true,
                    styleClass: 'relation',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A01'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                 {
                    label: 'Relacion 3',
                    type: 'relation',
                    expanded: true,
                    styleClass: 'relation',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A21'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                {
                    label: 'Relacion 3',
                    type: 'fundRoot',
                    expanded: true,
                    styleClass: 'fund-node',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A21'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                {
                    label: 'Relacion 3',
                    type: 'fundRoot',
                    expanded: true,
                    styleClass: 'fund-node',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A21'
                        },
                        styleClass: 'fund-node',
                    }]
                }
            ]
        }, ]
    },
    {
        label: 'T',
        type: 'rate',
        styleClass: 'rate-node',
        expanded: true,
        data: {
            name: 'Tarifa',
            code: '10112'
        },
        children: [{
            label: '',
            type: 'line',
            children: [{
                    label: 'Relacion 1',
                    type: 'fundRoot',
                    expanded: true,
                    styleClass: 'fund-node',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'AA1'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                {
                    label: 'Relacion 2',
                    type: 'relation',
                    expanded: true,
                    styleClass: 'relation',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A01'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                 {
                    label: 'Relacion 3',
                    type: 'relation',
                    expanded: true,
                    styleClass: 'relation',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A21'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                {
                    label: 'Relacion 3',
                    type: 'fundRoot',
                    expanded: true,
                    styleClass: 'fund-node',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A21'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                {
                    label: 'Relacion 3',
                    type: 'fundRoot',
                    expanded: true,
                    styleClass: 'fund-node',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A21'
                        },
                        styleClass: 'fund-node',
                    }]
                }
            ]
        }, ]
    },
    {
        label: 'T',
        type: 'rate',
        styleClass: 'rate-node',
        expanded: true,
        data: {
            name: 'Tarifa',
            code: '10112'
        },
        children: [{
            label: '',
            type: 'line',
            children: [{
                    label: 'Relacion 1',
                    type: 'fundRoot',
                    expanded: true,
                    styleClass: 'fund-node',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'AA1'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                {
                    label: 'Relacion 2',
                    type: 'relation',
                    expanded: true,
                    styleClass: 'relation',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A01'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                 {
                    label: 'Relacion 3',
                    type: 'relation',
                    expanded: true,
                    styleClass: 'relation',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A21'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                {
                    label: 'Relacion 3',
                    type: 'fundRoot',
                    expanded: true,
                    styleClass: 'fund-node',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A21'
                        },
                        styleClass: 'fund-node',
                    }]
                },
                {
                    label: 'Relacion 3',
                    type: 'fundRoot',
                    expanded: true,
                    styleClass: 'fund-node',
                    children: [{
                        label: 'N',
                        type: 'fund',
                        data: {
                            name: 'Fondo',
                            code: 'A21'
                        },
                        styleClass: 'fund-node',
                    }]
                }
            ]
        }, ]
    }]
}];

    }

    onNodeSelect(event) {
      /*  this.messageService.add({severity: 'success', summary: 'Node Selected', detail: event.node.label});*/
    }
}