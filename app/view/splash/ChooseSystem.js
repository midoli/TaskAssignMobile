
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
                                //                                    //更新TaskStatusTypeCodeValueStore
                                //                                    Ext.getStore('TaskStatusTypeCodeValueStore').load();
                                //                                    //更新ProcessTypeCodeValueStore
                                //                                    Ext.getStore('ProcessTypeCodeValueStore').load();
                                //                                    //更新TaskSourceCodeValueStore  
                                //                                    Ext.getStore('TaskSourceCodeValueStore').load();
                                //                                    //更新PriorityTypeCodeValueStore
                                //                                    Ext.getStore('PriorityTypeCodeValueStore').load();
                                //                                    //更新TaskTypeNameCodeValueStore  
                                //                                    Ext.getStore('TaskTypeNameCodeValueStore').load();
                                //                                    //更新UserListStore  
                                //                                    Ext.getStore('UserListStore').load();
                                //                                    //更新OwnerListStore  
                                //                                    Ext.getStore('OwnerListStore').load();
                                //                                    //更新AssignToListStore  
                                //                                    Ext.getStore('AssignToListStore').load();
                                //                                    //更新TaskSelectStore  
                                //                                    Ext.getStore('TaskSelectStore').load();
                                //                                },
                                //                                failure: function () {
                                //                                    //Ext.Msg.alert('Login Failure', 'Please check Name & PassWord.', Ext.emptyFn)
                                //                                }
                                //                            });
                                //                            //切換到Task Panel       
                                Ext.getCmp('splashScreen').setActiveItem(2);
                                //預設第一分頁(MyTask)顯示
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
                                //                                    //更新TaskStatusTypeCodeValueStore
                                //                                    Ext.getStore('TaskStatusTypeCodeValueStore').load();
                                //                                    //更新ProcessTypeCodeValueStore
                                //                                    Ext.getStore('ProcessTypeCodeValueStore').load();
                                //                                    //更新TaskSourceCodeValueStore  
                                //                                    Ext.getStore('TaskSourceCodeValueStore').load();
                                //                                    //更新PriorityTypeCodeValueStore
                                //                                    Ext.getStore('PriorityTypeCodeValueStore').load();
                                //                                    //更新TaskTypeNameCodeValueStore  
                                //                                    Ext.getStore('TaskTypeNameCodeValueStore').load();
                                //                                    //更新UserListStore  
                                //                                    Ext.getStore('UserListStore').load();
                                //                                    //更新OwnerListStore  
                                //                                    Ext.getStore('OwnerListStore').load();
                                //                                    //更新AssignToListStore  
                                //                                    Ext.getStore('AssignToListStore').load();
                                //                                    //更新TaskSelectStore  
                                //                                    Ext.getStore('TaskSelectStore').load();
                                //                                },
                                //                                failure: function () {
                                //                                    //Ext.Msg.alert('Login Failure', 'Please check Name & PassWord.', Ext.emptyFn)
                                //                                }
                                //                            });
                                //切換到Task Panel       
                                Ext.getCmp('splashScreen').setActiveItem(2);
                                //預設第一分頁(MyTask)顯示
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


