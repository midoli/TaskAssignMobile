Ext.define('GeoCon.view.taskassign.MyAssignToDetailPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'myassigntodetailpanel',
    config: {
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
                id: 'btn_MyAssignBack'
            }, {
                xtype: 'spacer'
            }, {
                //text: 'A',
                id: 'btn_MyAssignToHistory'
            }]
        },
        {
            docked: 'bottom',
            xtype: 'toolbar',
            ui: 'light',
            layout: {
                pack: 'center'
            },
            items: [{
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyAssignToActivities',
                //text: 'Activities',
                iconCls: 'compose',
                hidden: true
            }, {
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyAssignToNew',
                //text: 'New',
                iconCls: 'add'
            }, {
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyAssignToEdit',
                //text: 'Edit',
                iconCls: 'compose'
            }, {
                iconMask: true,
                iconAlign: 'right',
                ui: 'plain',
                id: 'btn_MyAssignToDelete',
                //text: 'Delete',
                iconCls: 'delete'
            }]
        },{
            xtype: 'fieldset',
            defaults: {
                labelWidth: '30%',
                readOnly: true
            },
            items: [{
                xtype: 'textareafield',
                height: 80,
                name: 'Title',
                label: '標題',
                listeners: {
                    focus: function() {
                        this.blur();
                    }
                }
            }, {
                xtype: 'textareafield',
                maxRows: 3,
                name: 'Desc',
                label: '工作描述',
                listeners: {
                    focus: function() {
                        this.blur();
                    }
                }
            }, {
                xtype: 'textfield',
                name: 'TaskTypeName',
                label: '工作類別'
            }, {
                xtype: 'textfield',
                name: 'TaskSourceName',
                label: '來自'
            }, {
                xtype: 'textfield',
                name: 'PriorityTypeName',
                label: '重要性'
//            }, {
//                xtype: 'textfield',
//                name: 'str_Owner',
//                label: '指派人'
            }, {
                xtype: 'textfield',
                name: 'str_AssignTo',
                label: '負責人'
            }, {
                xtype: 'textfield',
                name: 'str_Assist',
                label: '協辦人'
            }, {
                xtype: 'textfield',
                name: 'str_CCTo',
                label: '副本知會'
            }, {
                xtype: 'textfield',
                name: 'ProcessTypeName',
                label: '工作進度'
            }, {
                xtype: 'textfield',
                name: 'TaskStatustTypeName',
                label: '工作狀態'
            }, {
                xtype: 'textfield',
                name: 'str_StartDate',
                label: '起始日'
            }, {
                xtype: 'textfield',
                name: 'str_DueDate',
                label: '到期日'
            }, {
                xtype: 'panel',
                id:'AssignTOPanel',
                defaults: {
                    xtype: 'button',
                    style: 'margin: 0.1em',
                    flex: 1
                },
                layout: {
                    type: 'hbox'
                },
                items: [{
                    id: 'btn_MyAssignToReturnSubmit',
                    text: 'Reject'
                }, {
                    id: 'btn_MyAssignToCloseSubmit',
                    text: 'Comfirm'
                }]
            }]
        }]
    }
});