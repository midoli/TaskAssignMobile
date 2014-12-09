
Ext.define('GeoCon.view.splash.ChooseSystem', {
    extend: 'Ext.DataView',
    config: {
        store: {
            fields: ['name', 'url'],
            data: [{
                name: 'My Assigment', url: 'app-iphone-070201.png'
            }, {
                name: 'My Task', url: 'app-iphone-070202.png'
            }, {
                name: 'Setting', url: 'app-iphone-070203.png'
            }, {
                name: 'Help', url: 'app-iphone-070204.png'
}]
            },
            baseCls: 'categories-list',
            scrollable: true,
            itemTpl: [
            '<div class="image" style="background-image:url(img/{url});background-size:80px 80px;">{name}</div>'
        ].join(''),
            listeners: {
                itemtap: function(list, index, item, record) {
                    if (Ext.getCmp('splashScreen')) {
                        switch (record.get('name')) {
                            case 'My Assigment':
                                //                            var _form = Ext.getCmp('setting');
                                //                            _form.submit({
                                //                                url: Login_Url,
                                //                                method: 'Post',
                                //                                params: Ext.urlEncode(_form.getValues(true)),
                                //                                success: function (list, item) {
                                //                                    Name = Ext.getCmp('LoginName').getValue();
                                //                                    //��sTaskStatusTypeCodeValueStore
                                //                                    Ext.getStore('TaskStatusTypeCodeValueStore').load();
                                //                                    //��sProcessTypeCodeValueStore
                                //                                    Ext.getStore('ProcessTypeCodeValueStore').load();
                                //                                    //��sTaskSourceCodeValueStore  
                                //                                    Ext.getStore('TaskSourceCodeValueStore').load();
                                //                                    //��sPriorityTypeCodeValueStore
                                //                                    Ext.getStore('PriorityTypeCodeValueStore').load();
                                //                                    //��sTaskTypeNameCodeValueStore  
                                //                                    Ext.getStore('TaskTypeNameCodeValueStore').load();
                                //                                    //��sUserListStore  
                                //                                    Ext.getStore('UserListStore').load();
                                //                                    //��sOwnerListStore  
                                //                                    Ext.getStore('OwnerListStore').load();
                                //                                    //��sAssignToListStore  
                                //                                    Ext.getStore('AssignToListStore').load();
                                //                                    //��sTaskSelectStore  
                                //                                    Ext.getStore('TaskSelectStore').load();
                                //                                },
                                //                                failure: function () {
                                //                                    //Ext.Msg.alert('Login Failure', 'Please check Name & PassWord.', Ext.emptyFn)
                                //                                }
                                //                            });
                                //                            //������Task Panel       
                                Ext.getCmp('splashScreen').setActiveItem(2);
                                //�w�]�Ĥ@����(MyTask)���
                                if (Ext.getCmp('taskassign')) {
                                    Ext.getCmp('taskassign').setActiveItem(1);
                                }
                                break;
                            case 'My Task':
                                //                            var _form = Ext.getCmp('setting');
                                //                            _form.submit({
                                //                                url: Login_Url,
                                //                                method: 'Post',
                                //                                params: Ext.urlEncode(_form.getValues(true)),
                                //                                success: function (list, item) {
                                //                                    Name = Ext.getCmp('LoginName').getValue();
                                //                                    //��sTaskStatusTypeCodeValueStore
                                //                                    Ext.getStore('TaskStatusTypeCodeValueStore').load();
                                //                                    //��sProcessTypeCodeValueStore
                                //                                    Ext.getStore('ProcessTypeCodeValueStore').load();
                                //                                    //��sTaskSourceCodeValueStore  
                                //                                    Ext.getStore('TaskSourceCodeValueStore').load();
                                //                                    //��sPriorityTypeCodeValueStore
                                //                                    Ext.getStore('PriorityTypeCodeValueStore').load();
                                //                                    //��sTaskTypeNameCodeValueStore  
                                //                                    Ext.getStore('TaskTypeNameCodeValueStore').load();
                                //                                    //��sUserListStore  
                                //                                    Ext.getStore('UserListStore').load();
                                //                                    //��sOwnerListStore  
                                //                                    Ext.getStore('OwnerListStore').load();
                                //                                    //��sAssignToListStore  
                                //                                    Ext.getStore('AssignToListStore').load();
                                //                                    //��sTaskSelectStore  
                                //                                    Ext.getStore('TaskSelectStore').load();
                                //                                },
                                //                                failure: function () {
                                //                                    //Ext.Msg.alert('Login Failure', 'Please check Name & PassWord.', Ext.emptyFn)
                                //                                }
                                //                            });
                                //������Task Panel       
                                Ext.getCmp('splashScreen').setActiveItem(2);
                                //�w�]�Ĥ@����(MyTask)���
                                if (Ext.getCmp('taskassign')) {
                                    Ext.getCmp('taskassign').setActiveItem(0);
                                }
                                break;
                            case 'Setting':
                                Ext.getCmp('splashScreen').setActiveItem(0);
                                break;
                            case 'Help':
                                Ext.getCmp('splashScreen').setActiveItem(2);
                                if (Ext.getCmp('taskassign')) {
                                    Ext.getCmp('taskassign').setActiveItem(2);
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
        }
    });


