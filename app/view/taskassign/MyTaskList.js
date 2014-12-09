Ext.define('GeoCon.view.taskassign.MyTaskList', {
    extend: 'Ext.List',
    xtype: 'mytasklist',
    config: {
        plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],
        store: 'MyTaskStore',
        itemTpl: '<tpl for="IsRead"><tpl if="values == \'N\'"><img style="height:16px;width:16px;margin-right:5px;float:left;" src="' + Icon_Url + 'blueball.png" /><tpl else></tpl></tpl><div style="width:100%;"><b>{Title}</b></div><div style="width:60%;display:inline;font-size:14px;color:#3799FF;">{str_Owner}</div><div style="width:38%;display:inline;font-size:14px;<tpl for="OverTime"><tpl if="values == \'N\'">color:dodgerblue<tpl else>color:red</tpl></tpl>;text-align:right;float:right;">{TaskStatustTypeName_v2}</div>'
    }
});