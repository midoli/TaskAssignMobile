Ext.define('GeoCon.view.taskassign.MyTaskEditPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'mytaskeditpanel',
    config: {
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
                id: 'btn_MyTaskBack'
            }, {
                xtype: 'spacer'
            }, {
                //text: 'A',
                iconAlign: 'right',
                id: 'btn_MyTaskHistory'
            }]
        }, 
        {
            xtype: 'fieldset',
            //title: 'Personal Info',
            //instructions: 'Please enter the information above.',
            defaults: {
                labelWidth: '30%',
                readOnly: true
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'MyTaskEdit'
            }, {
                xtype: 'hiddenfield',
                name: 'TaskID'
            }, {
                xtype: 'hiddenfield',
                id: 'MyTask_Name_Edit',
                name: 'Name'
            }, {
                xtype: 'textareafield',
                height: 80,
                name: 'Title',
                label: '標題',
                readOnly: true,
                listeners: {
                    focus: function() {
                        this.blur();
                    }
                }
            }, {
                xtype: 'textareafield',
                maxRows: 4,
                name: 'Desc',
                label: '工作描述',
                readOnly: true,
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
            }, {
                xtype: 'textfield',
                name: 'str_Owner',
                label: '指派人'
                //            }, {
                //                xtype: 'textfield',
                //                name: 'str_AssignTo',
                //                label: '負責人'
            }, {
                xtype: 'textfield',
                name: 'str_Assist',
                label: '協辦人'
            }, {
                xtype: 'textfield',
                name: 'str_CCTo',
                label: '副本知會'
            }, {
                id: 'cbo_mytaskprocess',
                xtype: 'selectfield',
                label: '工作進度',
                name: 'Process',
                store: 'ProcessTypeCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                readOnly: false,
                cls: 'SelectTask'
            }, {
                id: 'cbo_mytaskstatus',
                xtype: 'selectfield',
                label: '工作狀態',
                name: 'TaskStatus',
                store: 'TaskStatusTypeCodeValueStore',
                displayField: 'Name',
                valueField: 'ID',
                readOnly: false,
                cls: 'SelectTask'

            }, {
                xtype: 'textfield',
                name: 'str_StartDate',
                label: '起始日'
            }, {
                xtype: 'textfield',
                name: 'str_DueDate',
                label: '到期日'
            }, {
                id: 'btn_MyTaskEditSubmit',
                xtype: 'button',
                text: 'Submit',
                handler: function (a,b) {
                    if (Ext.getCmp('taskedit')) {
                        var _form = Ext.getCmp('taskedit');
                        Ext.getCmp('MyTask_Name_Edit').setValue(Name);
                        _form.submit({
                            url: TaskAssign_Url,
                            method: 'Post',
                            params: Ext.urlEncode(_form.getValues(true)),
                            success: function () {
                                //更新MyTaskStore
                                Ext.getStore('MyTaskStore').load();
                                Ext.getStore('MyAssignToStore').load();
                                //_form.reset();
                                Ext.getCmp('taskdetail').reset();
                                //Ext.getCmp('mytaskmainpanel').setActiveItem(0);
                                Ext.Msg.alert('Submitted Success !', '');
                            },
                            failure: function () {
                                Ext.Msg.alert('Submitted Failure !', '');
                            }
                        });
                    }
                }
            }]
        }]
    }
});