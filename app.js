Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'GeoCon',
    views: [
        'Main'
    ],
    controllers: [
        'TaskAssign'
    ],
    models: [
        'CodeValue',
        'DealLog',
        'History',
        'QuickSelection',
        'MyTask',
        'CommentsList'
    ],
    stores: [
        'AOCodeValueStore',
        'AllDealStore',
        'AllDealHistoryStore',
        'MyDealStore',
        'MyDealHistoryStore',
        'QuickSelectionStore',
        'IndustryCodeValueStore',
        'RegionCodeValueStore',
        'StatusCodeValueStore',
        'EditStatusCodeValueStore',
        'DropReasonCodeValueStore',
        'DealSourceCodeValueStore',
        'MyTaskStore',
        'MyAssignToStore',
        'MyTaskCMListStore',
        'MyAssignToCMListStore',
        'TaskStatusTypeCodeValueStore',
        'ProcessTypeCodeValueStore',
        'TaskSourceCodeValueStore',
        'PriorityTypeCodeValueStore',
        'TaskTypeNameCodeValueStore',
        'UserListStore',
        'AssignToListStore',
        'OwnerListStore',
        'TaskSelectStore'
    ],
    launch: function () {
        Ext.create('GeoCon.view.Main');
        if (localStorage.LoginName != null) {
            Ext.getCmp('LoginName').setValue(localStorage.LoginName);
        }
        if (localStorage.PassWord != null) {
            Ext.getCmp('PassWord').setValue(localStorage.PassWord);
        }

        if (localStorage.LoginName != null && localStorage.PassWord != null) {
            Name = localStorage.LoginName;

            var _form = Ext.getCmp('setting');
            _form.submit({
                url: Login_Url,
                method: 'Post',
                params: Ext.urlEncode(_form.getValues(true)),
                success: function (list, item) {
                    //��sTaskStatusTypeCodeValueStore
                    Ext.getStore('TaskStatusTypeCodeValueStore').load();
                    //��sProcessTypeCodeValueStore
                    Ext.getStore('ProcessTypeCodeValueStore').load();
                    //��sTaskSourceCodeValueStore  
                    Ext.getStore('TaskSourceCodeValueStore').load();
                    //��sPriorityTypeCodeValueStore
                    Ext.getStore('PriorityTypeCodeValueStore').load();
                    //��sTaskTypeNameCodeValueStore  
                    Ext.getStore('TaskTypeNameCodeValueStore').load();
                    //��sUserListStore  
                    Ext.getStore('UserListStore').load();
                    //��sOwnerListStore  
                    Ext.getStore('OwnerListStore').load();
                    //��sAssignToListStore  
                    Ext.getStore('AssignToListStore').load();
                    //��sTaskSelectStore  
                    Ext.getStore('TaskSelectStore').load();

                    //��sMyTaskStore  
                    Ext.getStore('MyTaskStore').getProxy().config.extraParams.Name = Name;
                    Ext.getStore('MyTaskStore').load();

                    //��sMyTaskStore
                    Ext.getStore('MyAssignToStore').getProxy().config.extraParams.Name = Name;
                    Ext.getStore('MyAssignToStore').load();
                    
                },
                failure: function () {
                    //Ext.Msg.alert('Login Failure', 'Please check Name & PassWord.', Ext.emptyFn)
                }
            });
            //������Task Panel       
        } else {
            Ext.getCmp('splashScreen').setActiveItem(0);
        }
    }
});
