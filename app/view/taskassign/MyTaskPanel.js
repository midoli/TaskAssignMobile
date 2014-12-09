Ext.define('GeoCon.view.taskassign.MyTaskPanel', {
    extend: 'Ext.Panel',
    id: 'mytaskpanel',
    requires: [
        'GeoCon.view.taskassign.MyTaskListPanel',
        'GeoCon.view.taskassign.MyTaskDetailPanel',
        'GeoCon.view.taskassign.MyTaskCMList',
        'GeoCon.view.taskassign.MyTaskEditPanel',
        'GeoCon.view.taskassign.MyTaskComposePanel'
    ],
    config: {
        layout: 'card',
        activeItem: 0,
        items: [
        {
            id: 'tasklistpanel',
            xclass: 'GeoCon.view.taskassign.MyTaskListPanel'
        }, {
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
