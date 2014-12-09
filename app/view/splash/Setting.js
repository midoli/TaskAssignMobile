Ext.define('GeoCon.view.splash.Setting', {
    extend: 'Ext.form.Panel',
    id: 'setting',
    config: {
        items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            title: 'Setting',
            items: [{
                iconMask: true,
                ui: 'back',
                text: '返回',
                id: 'btn_MyTaskAssignBack'
            }]
        },
        {
            xtype: 'fieldset',
            defaults: {
                labelWidth: '30%'
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'actiontype',
                value: 'Login'
            }, {
                xtype: 'textfield',
                id: 'LoginName',
                name: 'LoginName',
                label: 'Login Name'
            }, {
                xtype: 'passwordfield',
                id: 'PassWord',
                name: 'PassWord',
                label: 'Password'
            }, {
                xtype: 'button',
                text: 'Submit',
                handler: function (btn) {
                    //if (Ext.getCmp('setting')) {
                        var _form = btn.up('panel');
                        _form.submit({
                            url: Login_Url,
                            method: 'Post',
                            params: Ext.urlEncode(_form.getValues(true)),
                            success: function (list, item) {
                                //記錄使用者名稱(LoginName)
                                Name = Ext.getCmp('LoginName').getValue();
                                localStorage.LoginName = Name;
                                localStorage.PassWord = Ext.getCmp('PassWord').getValue();
                                //切換ChooseSystem
                                if (Ext.getCmp('splashScreen')) {
                                    //Ext.getCmp('splashScreen').setActiveItem(3);
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

                                    Ext.Msg.alert('', 'Submitted Success !');

//                                    //切換到Task Panel       
//                                    Ext.getCmp('splashScreen').setActiveItem(2);
//                                    //預設第一分頁(MyTask)顯示
//                                    if (Ext.getCmp('taskassign')) {
//                                        Ext.getCmp('taskassign').setActiveItem(0);
//                                    }

                                    //_form.hide();
                                }
                            },
                            failure: function () {
                                Ext.Msg.alert('Login Failure', 'Please check Name & PassWord.', Ext.emptyFn)
                            }
                        });

                    //}
                }
            }]
        }]
    }
});