Ext.define('GeoCon.view.taskassign.MyAssignToListPanel', {
    extend: 'Ext.Panel',
    requires: [
        'GeoCon.view.taskassign.MyAssignToList'
    ],
    config: {
        layout: 'fit',
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: 'My Assignment',
            items: [{
                iconMask: true,
                iconCls: 'reply',
                ui: 'back',
                //text: '返回',
                id: 'btn_MyTaskAssignBack'
            }]
        }, 
        {
            docked: 'top',
            xtype: 'toolbar',
            ui: 'light',
            hidden: true,
            items: [{
                id: 'btn_MyAssignToRefresh',
                iconCls: 'refresh',
                iconMask: true
            }, {
                width: 180,
                id: 'btn_MyAssignToSearch',
                xtype: 'searchfield',
                placeHolder: 'Search...'
            }]
        }, 
        {
            //docked: 'left',
            xtype: 'panel',
            defaults: {
                style: 'margin: 0px',
                flex: 1
            },
            layout: {
                type: 'fit'
            },
            items: [{
                docked: 'bottom',
                xtype: 'toolbar',
                ui: 'light',
                items: [
//                {
//                    width: 100,
//                    xtype: 'selectfield',
//                    id: 'cbo_MyAssignUserSelect',
//                    store: 'AssignToListStore',
//                    displayField: 'Name',
//                    valueField: 'ID'
//                },
                {
                    xtype: 'button',
                    text: '負責人',
                    id: 'btn_AssignUser'
                },                
                {
                    xtype: 'button',
                    text: '工作狀態',
                    id: 'btn_AssignStatus'
                },                
//                , {
//                    width: 110,
//                    xtype: 'selectfield',
//                    id: 'cbo_MyAssignStatusSelect',
//                    store: 'TaskSelectStore',
//                    displayField: 'Name',
//                    valueField: 'ID'
//                }, 
                {
                    iconMask: true,
                    iconAlign: 'right',
                    ui: 'plain',
                    id: 'btn_MyAssignToNew',
                    iconCls: 'add'
                }]
            }, {
                id: 'myassigntolist',
                xclass: 'GeoCon.view.taskassign.MyAssignToList'
            }]
        }]
    }
});