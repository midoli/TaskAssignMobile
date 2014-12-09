Ext.define('GeoCon.view.taskassign.MyAssignToComposePanel', {
    extend: 'Ext.form.FormPanel',
    //xtype: 'composepanel',
    config: {
        //        layout: {
        //            type: 'vbox',
        //            align: 'stretch'
        //        },
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
                //text: 'B',
                id: 'btn_MyAssignToDetail'
            }]
        },{
            xtype: 'fieldset',
            defaults: {
                labelWidth: '32%'
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'AddCommand'
            }, {
                xtype: 'hiddenfield',
                id: "ActivitiesTaskID",
                name: 'TaskID',
                value: "null"
            }, {
                xtype: 'hiddenfield',
                name: 'CommandType',
                value: "1"
            }, {
                xtype: 'hiddenfield',
                id: "ActivitiesUser",
                name: 'Name'
            }, {
                xtype: 'textareafield',
                id: 'MyAssignToActivities',
                name: 'ComposeText',
                label: 'Activities'
            }]
        }, {
            xtype: 'panel',
            defaults: {
                xtype: 'button',
                style: 'margin: 0.1em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [{
                text: 'Reset',
                handler: function () {
                    Ext.getCmp('assigntocomposepanel').reset();
                }
            }, {
                id: 'btn_MyAssignToActivitiesSubmit',
                text: 'Submit'
            }]
        }]
    }
});