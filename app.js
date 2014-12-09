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
                    //更新TaskStatusTypeCodeValueStore
                    Ext.getStore('TaskStatusTypeCodeValueStore').load();
                    //更新ProcessTypeCodeValueStore
                    Ext.getStore('ProcessTypeCodeValueStore').load();
                    //更新TaskSourceCodeValueStore  
                    Ext.getStore('TaskSourceCodeValueStore').load();
                    //更新PriorityTypeCodeValueStore
                    Ext.getStore('PriorityTypeCodeValueStore').load();
                    //更新TaskTypeNameCodeValueStore  
                    Ext.getStore('TaskTypeNameCodeValueStore').load();
                    //更新UserListStore  
                    Ext.getStore('UserListStore').load();
                    //更新OwnerListStore  
                    Ext.getStore('OwnerListStore').load();
                    //更新AssignToListStore  
                    Ext.getStore('AssignToListStore').load();
                    //更新TaskSelectStore  
                    Ext.getStore('TaskSelectStore').load();

                    //更新MyTaskStore  
                    Ext.getStore('MyTaskStore').getProxy().config.extraParams.Name = Name;
                    Ext.getStore('MyTaskStore').load();

                    //更新MyTaskStore
                    Ext.getStore('MyAssignToStore').getProxy().config.extraParams.Name = Name;
                    Ext.getStore('MyAssignToStore').load();
                    
                },
                failure: function () {
                    //Ext.Msg.alert('Login Failure', 'Please check Name & PassWord.', Ext.emptyFn)
                }
            });
            //切換到Task Panel       
        } else {
            Ext.getCmp('splashScreen').setActiveItem(0);
        }
    }
});
