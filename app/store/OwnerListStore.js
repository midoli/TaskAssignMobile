Ext.define('GeoCon.store.OwnerListStore', {
    extend: 'Ext.data.Store',
    requires: ['GeoCon.model.CodeValue', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'GeoCon.model.CodeValue',
        proxy: {
            type: 'jsonp',
            url: TaskAssign_Url,
            extraParams: {
                actiontype: 'UserList',
                UserType: 'Owner'
            },
            reader: {
                type: 'json',
                rootProperty: 'root'
            }
        }
    }
});
