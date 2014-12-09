Ext.define('GeoCon.view.taskassign.MyTaskMainPanel', {
    extend: 'Ext.Panel',
    requires: [
        'GeoCon.view.taskassign.MyTaskDetailPanel',
        'GeoCon.view.taskassign.MyTaskCMList',
        'GeoCon.view.taskassign.MyTaskEditPanel',
        'GeoCon.view.taskassign.MyTaskComposePanel'
    ],
    config: {
        layout: 'card',
        activeItem: 0,
        items: [{
            id: 'taskdetailpanel',
            xclass: 'GeoCon.view.taskassign.MyTaskDetailPanel'
        }, {
            id: 'taskhistorypanel',
            xclass: 'GeoCon.view.taskassign.MyTaskCMList'
        }, {
            id: 'taskeditpanel',
            xclass: 'GeoCon.view.taskassign.MyTaskEditPanel'
        }, {
            id: 'taskcomposepanel',
            xclass: 'GeoCon.view.taskassign.MyTaskComposePanel'
        }]
    }
});
