﻿Ext.define('GeoCon.view.taskassign.MyAssignToCMList', {
    extend: 'Ext.List',
    config: {
        //emptyText: '<div style="width:100%;text-align:center;font-size:22px">No Data!</div>',
        plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],
        store: 'MyAssignToCMListStore',
        cls: 'DeaLog-list',
        selectedCls: 'DeaLog-list-item-selected',
        //itemTpl: '<table><tr><td rowspan="2"><img src="resources/themes/images/default/edu_languages.png" /></td><td><strong>{User}:</strong></td></tr><tr><td><em>{Comments}</em></td></tr></table>'
        //itemTpl: '<table style="width:100%;"><tr><td width="55px" style="vertical-align:top;" rowspan="2"><img width:"48px" height="48px" src="' + Icon_Url + '{Icon}.png" /></td><td  style="color:gray;">{User}</td><td align="right" width="200px" style="color:dodgerblue;">{Str_Modify_Date}</td></tr><tr><td colspan="2"><div>{Comments}</div></td></tr></table>'
        itemTpl: '<table style="width:100%;"><tr><td width="55px" style="vertical-align:top;" rowspan="2"><img width:"48px" height="48px" src="' + Icon_Url + '{CreateUser}.png" /></td><td  style="color:gray;">{str_CreateUser}</td><td align="right" width="200px" style="color:dodgerblue;">{str_CreateDate}</td></tr><tr><td colspan="2"><div>{Desc}</div></td></tr></table>',
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
        },
            {
                xtype: 'toolbar',
                docked: 'bottom',
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
                    iconCls: 'compose'
                    //hidden: true
                }]

            }
        ]
    }
});