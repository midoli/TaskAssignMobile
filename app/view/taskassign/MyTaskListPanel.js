Ext.define('GeoCon.view.taskassign.MyTaskListPanel', {
    extend: 'Ext.Panel',
    id: 'mytasklistpanel',
    requires: [
        'GeoCon.view.taskassign.MyTaskList'
    ],
    config: {
        layout: 'fit',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: 'My Task',
            items: [{
                iconMask: true,
                iconCls: 'reply',
                ui: 'back',
                //text: '返回',
                id: 'btn_MyTaskAssignBack'
}]
            },
        {
        //docked: 'left',
        //width: 250,
        xtype: 'panel',
        defaults: {
            style: 'margin: 0px',
            flex: 1
        },
        layout: {
            type: 'card'
        },
        items: [{
            docked: 'bottom',
            xtype: 'toolbar',
            ui: 'light',
            items: [
            {
                xtype: 'button',
                text: '指派人',
                id: 'btn_OwnerList'
            },
            {
                xtype: 'button',
                text: '工作狀態',
                id: 'btn_TaskStatus'
            }]
            //            {
//                width: 100, //35
//                xtype: 'selectfield',
//                id: 'cbo_MyTaskUserSelect',
//                store: 'OwnerListStore',
//                displayField: 'Name',
//                valueField: 'ID'
//            }, 
//            {
//                width: 110,
//                id: 'cbo_MyTaskStatusSelect',
//                xtype: 'selectfield',
//                store: 'TaskSelectStore',
//                displayField: 'Name',
//                valueField: 'ID'
//            }]
            }, {
                id: 'mytasklist',
                xclass: 'GeoCon.view.taskassign.MyTaskList'}]
}]
        }
    });