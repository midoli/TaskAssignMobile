Ext.define('GeoCon.view.splash.TaskAssign', {
    extend: 'Ext.Panel',
    id: 'taskassign',
    requires: [
        'GeoCon.view.taskassign.MyTaskPanel',
        'GeoCon.view.taskassign.MyAssignToPanel',
        'GeoCon.view.taskassign.HelperPanel'
    ],
    config: {
        layout: 'card',
        activeItem: 0,
        items: [
        {
            id: 'mytaskpanel',
            xclass: 'GeoCon.view.taskassign.MyTaskPanel'
        }, {
            id: 'myassigntopanel',
            xclass: 'GeoCon.view.taskassign.MyAssignToPanel'
        }, {
            id: 'helperpanel',
            xclass: 'GeoCon.view.taskassign.HelperPanel'
        }]
    }
});
