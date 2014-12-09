Ext.define('GeoCon.controller.TaskAssign', {
    extend: 'Ext.app.Controller',

    //requires: ['Ext.util.GeoLocation'],

    config: {
        control: {
            '#btn_MyTaskAssignBack':
            {
                //按下btn Back
                tap: 'onMyTaskAssignBack'
            },
            //MyTask
            '#btn_MyTaskBack':
            {
                //按下btn Back
                tap: 'onMyTaskBack'
            },
            '#btn_MyTaskDetailBack':
            {
                //按下btn Back
                tap: 'onMyTaskDetailBack'
            },
            '#btn_MyTaskSearch':
            {
                keyup: 'onbtn_MyTaskSearchKeyup',
                clearicontap: 'onbtn_MyTaskSearchCleariconTap'
            },
            '#mytasklist':
            {
                //按下MyTask ListItem
                itemtap: 'onMyTaskListItemTap',
                //改變選擇項目
                selectionchange: 'onMyTaskListSelectionChange'
            },
            '#btn_MyTaskRefresh':
            {
                //按下MyTask Refresh Button
                tap: 'onbtn_MyTaskRefreshTap'
            },
            '#btn_MyTaskDetail':
            {
                //按下MyTask btn Brief
                tap: 'onbtn_MyTaskDetailTap'
            },
            '#btn_MyTaskHistory':
            {
                //按下MyTask btn Comments
                tap: 'onbtn_MyTaskHistoryTap'
            },
            '#btn_MyTaskEdit':
            {
                //按下MyTask btn Edit
                tap: 'onbtn_MyTaskEditTap'
            },
            '#btn_MyTaskComments':
            {
                //按下MyTask btn Comments
                tap: 'onbtn_MyTaskCommentsTap'
            },
            '#btn_MyTaskEditSubmit':
            {
                //按下MyTaskEditPanel btn Submit
                tap: 'onbtn_MyTaskEditSubmitTap'
            },
            '#cbo_mytaskprocess':
            {
                //改變工作進度
                change: 'oncbo_mytaskprocessChange'
            },
            '#cbo_mytaskstatus':
            {
                //改變工作狀態
                change: 'oncbo_mytaskstatusChange'
            },
            '#btn_MyTaskCommentsSubmit':
            {
                //送出Comments
                tap: 'onbtn_MyTaskCommentsSubmitTap'
            },
            '#cbo_MyTaskStatusSelect':
            {
                // MyTask Select Change
                change: 'oncbo_MyTaskStatusSelectChange'
            },
            '#cbo_MyTaskUserSelect':
            {
                //指派人 Select Change
                change: 'oncbo_MyTaskUserSelectChange'
            },
            //MyAssignTo     
            '#btn_MyAssignBack':
            {
                //按下btn Back
                tap: 'onMyAssignBack'
            },
            '#btn_MyAssignDetailBack':
            {
                //按下btn Back
                tap: 'onMyAssignDetailBack'
            },
            '#btn_MyAssignToSearch':
            {
                keyup: 'onbtn_MyAssignToSearchKeyup',
                clearicontap: 'onbtn_MyAssignToSearchCleariconTap'
            },
            '#myassigntolist':
            {
                //按下MyAssignTo ListItem
                itemtap: 'onMyAssignToListItemTap',
                //改變選擇項目
                selectionchange: 'onMyAssignToListSelectionChange'
            },
            '#btn_MyAssignToDetail':
            {
                //按下MyAssignTo btn Brief
                tap: 'onbtn_MyAssignToDetailTap'
            },
            '#btn_MyAssignToHistory':
            {
                //按下MyAssignTo btn Comments
                tap: 'onbtn_MyAssignToHistoryTap'
            },
            '#btn_MyAssignToActivities':
            {
                //按下MyAssignTo btn Activities
                tap: 'onbtn_MyAssignToActivitiesTap'
            },
            '#btn_MyAssignToActivitiesSubmit':
            {
                //送出Comments
                tap: 'onbtn_MyAssignToActivitiesSubmitTap'
            },
            '#btn_MyAssignToEdit':
            {
                //按下 MyAssignTo Edit
                tap: 'onbtn_MyAssignToEditTap'
            },
            '#btn_MyAssignToEditSubmit':
            {
                //按下 MyAssignTo Edit Submit
                tap: 'onbtn_MyAssignToEditSubmitTap'
            },
            '#btn_MyAssignToEditSubmit2':
            {
                //按下 MyAssignTo Edit Submit
                tap: 'onbtn_MyAssignToEditSubmitTap2'
            },
            '#btn_MyAssignToNew':
            {
                //按下 MyAssignTo New
                tap: 'onbtn_MyAssignToNewTap'
            },
            '#btn_MyAssignToNewSubmit':
            {
                //按下 MyAssignTo New Submit
                tap: 'onbtn_MyAssignToNewSubmitTap'
            },
            '#cbo_AssignTo_Edit_AssignTo':
            {
                //改變工作進度
                change: 'oncbo_AssignTo_Edit_AssignToChange'
            },
            '#btn_MyAssignToDelete':
            {
                //按下 MyAssignTo Delete
                tap: 'onbtn_MyAssignToDeleteTap'
            },
            '#cbo_MyAssignStatusSelect':
            {
                // MyAssignTo Select Change
                change: 'oncbo_MyAssignStatusSelectChange'
            },
            '#cbo_MyAssignUserSelect':
            {
                // MyAssignTo Select Change
                change: 'oncbo_MyAssignUserSelectChange'
            },
            '#btn_MyAssignToRefresh':
            {
                //按下 MyAssignTo Refresh
                tap: 'onbtn_MyAssignToRefreshTap'
            },
            '#btn_MyAssignToReturnSubmit':
            {
                //按下My AssignTo Return
                tap: 'onbtn_MyAssignToReturnSubmitTap'
            },
            '#btn_MyAssignToCloseSubmit':
            {
                //按下My AssignTo Close
                tap: 'onbtn_MyAssignToCloseSubmitTap'
            },
            '#btn_OwnerList':
            {
                tap: 'onOwnerList'
            },
            '#btn_TaskStatus':
            {
                tap: 'onTaskStatus'
            },
            '#btn_AssignUser':
            {
                tap: 'onAssignUser'
            },
            '#btn_AssignStatus':
            {
                tap: 'onAssignStatus'
            }
        }
    },
    onOwnerList: function(btn) {
        if (!this.overlay) {
            this.overlay = Ext.Viewport.add({
                xtype: 'panel',
                modal: true,
                hideOnMaskTap: true,
                width: '70%',
                height: 200,
                left: 0,
                top: 0,
                layout: 'card',
                items: [
                    {
                        xtype: 'list',
                        store: 'OwnerListStore',
                        itemTpl: '<div style="width:100%;">{Name}</div>',
                        listeners: {
                            itemtap: function(list, index, target, record) {
                                this.up('panel').show();
                                //更新MyTaskStore
                                this.MyTask_Store = Ext.getStore('MyTaskStore');
                                this.MyTask_Store.getProxy().config.extraParams.Name = Name;
                                this.MyTask_Store.getProxy().config.extraParams.UserSelect = record.get('ID');
                                this.MyTask_Store.loadPage(1);
                                this.up('panel').hide();
                                btn.setText(record.get('Name'));
                            }
                        }
}]
            });
        }

        this.overlay.showBy(btn);
    },
    onTaskStatus: function(btn) {
        if (!this.taskoverlay) {
            this.taskoverlay = Ext.Viewport.add({
                xtype: 'panel',
                modal: true,
                hideOnMaskTap: true,
                width: '70%',
                height: 200,
                left: 0,
                top: 0,
                layout: 'card',
                items: [
                    {
                        xtype: 'list',
                        store: 'TaskSelectStore',
                        itemTpl: '<div style="width:100%;">{Name}</div>',
                        listeners: {
                            itemtap: function(list, index, target, record) {
                                this.up('panel').show();
                                this.MyTask_Store = Ext.getStore('MyTaskStore');
                                this.MyTask_Store.getProxy().config.extraParams.Name = Name;
                                this.MyTask_Store.getProxy().config.extraParams.Status = record.get('Value');
                                this.MyTask_Store.getData().sort('ModifyDate', 'Desc');
                                this.MyTask_Store.loadPage(1);

                                this.up('panel').hide();
                                btn.setText(record.get('Name'));
                            }
                        }
}]
            });
        }

        this.taskoverlay.showBy(btn);
    },
    
    onAssignUser: function(btn) {
        if (!this.useroverlay) {
            this.useroverlay = Ext.Viewport.add({
                xtype: 'panel',
                modal: true,
                hideOnMaskTap: true,
                width: '70%',
                height: 200,
                left: 0,
                top: 0,
                layout: 'card',
                items: [
                    {
                        xtype: 'list',
                        store: 'AssignToListStore',
                        itemTpl: '<div style="width:100%;">{Name}</div>',
                        listeners: {
                            itemtap: function(list, index, target, record) {
                                this.up('panel').show();

                                this.MyAssignTo_Store = Ext.getStore('MyAssignToStore');
                                this.MyAssignTo_Store.getProxy().config.extraParams.Name = Name;
                                this.MyAssignTo_Store.getProxy().config.extraParams.UserSelect = record.get('ID');
                                this.MyAssignTo_Store.loadPage(1);

                                this.up('panel').hide();
                                btn.setText(record.get('Name'));
                            }
                        }
}]
            });
        }

        this.useroverlay.showBy(btn);
    },

    onAssignStatus: function(btn) {
        if (!this.assignoverlay) {
            this.assignoverlay = Ext.Viewport.add({
                xtype: 'panel',
                modal: true,
                hideOnMaskTap: true,
                width: '70%',
                height: 200,
                left: 0,
                top: 0,
                layout: 'card',
                items: [
                    {
                        xtype: 'list',
                        store: 'TaskSelectStore',
                        itemTpl: '<div style="width:100%;">{Name}</div>',
                        listeners: {
                            itemtap: function(list, index, target, record) {
                                this.up('panel').show();
                                this.MyAssignTo_Store = Ext.getStore('MyAssignToStore');
                                this.MyAssignTo_Store.getProxy().config.extraParams.Name = Name;
                                this.MyAssignTo_Store.getProxy().config.extraParams.Status = record.get('Value');
                                this.MyAssignTo_Store.getData().sort('ModifyDate', 'Desc');
                                this.MyAssignTo_Store.loadPage(1);

                                this.up('panel').hide();
                                btn.setText(record.get('Name'));
                            }
                        }
}]
            });
        }

        this.assignoverlay.showBy(btn);
    },

    onMyTaskListItemTap: function(list, index, target, record) {

        if (Ext.getCmp('mytaskpanel')) {
            Ext.getCmp('mytaskpanel').setActiveItem(1);
        }

        if (Ext.getCmp('taskdetailpanel')) {
            var _Store = list.getStore();
            var _Record = _Store.getAt(index);
            Ext.getCmp('taskdetailpanel').setRecord(_Record);
            Ext.getCmp('taskeditpanel').setRecord(_Record);
            TaskID = _Record.get('TaskID');

            //            //按鈕變色提示
            //            Ext.getCmp('btn_MyTaskDetail').setUi('confirm');
            //            Ext.getCmp('btn_MyTaskHistory').setUi('normal');

            //            //按鈕顯示
            //            Ext.getCmp('btn_MyTaskEdit').show();
            //            //按鈕隱藏
            //            Ext.getCmp('btn_MyTaskComments').hide();
            //            //未讀註記隱藏
            //            if (target.getFirstChild().getFirstChild().dom.nodeName == 'IMG') {
            //                target.getFirstChild().getFirstChild().hide();
            //            }
            //            if (_Record.data.IsClose == 'Y') {
            //                Ext.getCmp('btn_MyTaskEdit').hide();
            //            }
            //            else {
            //                Ext.getCmp('btn_MyTaskEdit').show();
            //            }

            //送出已讀取紀錄
            Ext.Ajax.request({
                url: TaskAssign_Url,
                params: {
                    actiontype: 'ReadTask',
                    TaskID: TaskID,
                    Name: Name
                },
                method: "POST",
                success: function() {
                    //TaskID = '';
                    //Ext.getStore('MyAssignToStore').load();
                    //Ext.Msg.alert('', 'MyAssignment Delete Success !');
                },
                failure: function(response) {
                    //Ext.Msg.alert('', 'MyAssignment Delete Failure !');
                }
            });

        }
    },

    onMyTaskAssignBack: function() {
        if (Ext.getCmp('splashScreen')) {
            Ext.getCmp('splashScreen').setActiveItem(3);
        }
    },

    onMyTaskBack: function() {
        if (Ext.getCmp('mytaskpanel')) {
            Ext.getCmp('mytaskpanel').setActiveItem(0);
        }
    },

    onMyTaskDetailBack: function() {
        if (Ext.getCmp('mytaskpanel')) {
            Ext.getCmp('mytaskpanel').setActiveItem(1);
        }
    },

    onMyAssignBack: function() {
        if (Ext.getCmp('myassigntopanel')) {
            Ext.getCmp('myassigntopanel').setActiveItem(0);
        }
    },

    onMyAssignDetailBack: function() {
        if (Ext.getCmp('myassigntopanel')) {
            Ext.getCmp('myassigntopanel').setActiveItem(1);
        }
    },

    onMyTaskListSelectionChange: function(list, records, eOpts) {
        if (isMyTaskStoreLosd) {
            if (Ext.getCmp('mytaskmainpanel')) {
                Ext.getCmp('mytaskmainpanel').setActiveItem(0);
            }

            if (Ext.getCmp('taskdetailpanel')) {
                //var _Store = list.getStore();
                //var _Record = _Store.getAt(index);
                var _Store = list.getStore();
                var _index = 0;
                if (TaskID != "") {
                    _index = _Store.find('TaskID', TaskID);
                }
                if (_index == -1) {
                    _index = 0;
                }
                var _Record = _Store.getAt(_index);
                Ext.getCmp('taskdetailpanel').setRecord(_Record);
                Ext.getCmp('taskeditpanel').setRecord(_Record);
                TaskID = _Record.get('TaskID');

                //按鈕變色提示
                //                Ext.getCmp('btn_MyTaskDetail').setUi('confirm');
                //                Ext.getCmp('btn_MyTaskHistory').setUi('normal');

                //                //Ext.getCmp('btn_MyTaskActivities').hide();
                //                //Ext.getCmp('btn_MyTaskComments').hide();

                //                //按鈕顯示
                //                Ext.getCmp('btn_MyTaskEdit').show();
                //                //按鈕隱藏
                //                Ext.getCmp('btn_MyTaskComments').hide();

                //                if (_Record.data.IsClose == 'Y') {
                //                    Ext.getCmp('btn_MyTaskEdit').hide();
                //                }
                //                else {
                //                    Ext.getCmp('btn_MyTaskEdit').show();
                //                }

                //                //送出已讀取紀錄
                Ext.Ajax.request({
                    url: TaskAssign_Url,
                    params: {
                        actiontype: 'ReadTask',
                        TaskID: TaskID,
                        Name: Name
                    },
                    method: "POST",
                    success: function() {
                        //TaskID = '';
                        //Ext.getStore('MyAssignToStore').load();
                        //Ext.Msg.alert('', 'MyAssignment Delete Success !');
                    },
                    failure: function(response) {
                        //Ext.Msg.alert('', 'MyAssignment Delete Failure !');
                    }
                });
            }
        }
        isMyTaskStoreLosd = false;
    },
    onMyAssignToListItemTap: function(list, index, target) {
        if (Ext.getCmp('myassigntopanel')) {
            Ext.getCmp('myassigntopanel').setActiveItem(1);
        }
        if (Ext.getCmp('assigntodetailpanel')) {
            var _Store = list.getStore();
            var _Record = _Store.getAt(index);
            Ext.getCmp('assigntodetailpanel').setRecord(_Record);
            TaskID = _Record.get('TaskID');

            //按鈕變色提示
            Ext.getCmp('btn_MyAssignToDetail').setUi('confirm');
            Ext.getCmp('btn_MyAssignToHistory').setUi('normal');

            //按鈕顯示
            Ext.getCmp('btn_MyAssignToNew').show();
            Ext.getCmp('btn_MyAssignToEdit').show();
            Ext.getCmp('btn_MyAssignToDelete').show();
            //按鈕隱藏
            Ext.getCmp('btn_MyAssignToActivities').hide();

            //結案 退回按鈕隱藏
            if (_Record.get('TaskStatus') == 3 && _Record.get('IsClose') == 'N') {
                Ext.getCmp('AssignTOPanel').show();
            }
            else {
                Ext.getCmp('AssignTOPanel').hide();
            }
            //未讀註記隱藏
            if (target.getFirstChild().getFirstChild().dom.nodeName == 'IMG') {
                target.getFirstChild().getFirstChild().hide();
            }
            //送出已讀取紀錄
            Ext.Ajax.request({
                url: TaskAssign_Url,
                params: {
                    actiontype: 'ReadTask',
                    TaskID: TaskID,
                    Name: Name
                },
                method: "POST",
                success: function() {
                    //TaskID = '';
                    //Ext.getStore('MyAssignToStore').load();
                    //Ext.Msg.alert('', 'MyAssignment Delete Success !');
                },
                failure: function(response) {
                    //Ext.Msg.alert('', 'MyAssignment Delete Failure !');
                }
            });
        }
        if (Ext.getCmp('assigntoeditpanel')) {
            var _Store = list.getStore();
            var _Record = _Store.getAt(index);
            Ext.getCmp('assigntoeditpanel').setRecord(_Record);
            TaskID = _Record.get('TaskID');

            if (_Record.data.IsClose == 'Y') {
                Ext.getCmp('btn_MyAssignToEdit').hide();
                Ext.getCmp('btn_MyAssignToDelete').hide();
            }
            else {
                Ext.getCmp('btn_MyAssignToEdit').show();
                Ext.getCmp('btn_MyAssignToDelete').show();
            }
        }

        if (Ext.getCmp('assigntoeditpanel2')) {
            var _Store = list.getStore();
            var _Record = _Store.getAt(index);
            Ext.getCmp('assigntoeditpanel2').setRecord(_Record);
            TaskID = _Record.get('TaskID');

            if (_Record.data.IsClose == 'Y') {
                Ext.getCmp('btn_MyAssignToEdit').hide();
                Ext.getCmp('btn_MyAssignToDelete').hide();
            }
            else {
                Ext.getCmp('btn_MyAssignToEdit').show();
                Ext.getCmp('btn_MyAssignToDelete').show();
            }
        }
    },
    onMyAssignToListSelectionChange: function(list, records, eOpts) {
        if (isMyAssignStoreLosd) {
            if (Ext.getCmp('myassigntomainpanel')) {
                Ext.getCmp('myassigntomainpanel').setActiveItem(0);
            }
            if (Ext.getCmp('assigntodetailpanel')) {
                var _Store = list.getStore();
                //var _index = _Store.find('TaskID', Tid_Edit);
                var _index = 0;
                if (TaskID != "") {
                    _index = _Store.find('TaskID', TaskID);
                }
                if (_index == -1) {
                    _index = 0;
                }
                var _Record = _Store.getAt(_index); //_Store.getAt(index);
                Ext.getCmp('assigntodetailpanel').setRecord(_Record);
                TaskID = _Record.get('TaskID');

                //按鈕變色提示
                //                Ext.getCmp('btn_MyAssignToDetail').setUi('confirm');
                //                Ext.getCmp('btn_MyAssignToHistory').setUi('normal');

                //                //按鈕顯示
                //                Ext.getCmp('btn_MyAssignToNew').show();
                //                Ext.getCmp('btn_MyAssignToEdit').show();
                //                Ext.getCmp('btn_MyAssignToDelete').show();
                //                //按鈕隱藏
                //                Ext.getCmp('btn_MyAssignToActivities').hide();

                //                //結案 退回按鈕隱藏
                //                if (_Record.get('TaskStatus') == 3 && _Record.get('IsClose') == 'N') {
                //                    Ext.getCmp('AssignTOPanel').show();
                //                }
                //                else {
                //                    Ext.getCmp('AssignTOPanel').hide();
                //                }
                //                if (_Record.data.IsClose == 'Y') {
                //                    Ext.getCmp('btn_MyAssignToEdit').hide();
                //                    Ext.getCmp('btn_MyAssignToDelete').hide();
                //                }
                //                else {
                //                    Ext.getCmp('btn_MyAssignToEdit').show();
                //                    Ext.getCmp('btn_MyAssignToDelete').show();
                //                }
                //送出已讀取紀錄
                Ext.Ajax.request({
                    url: TaskAssign_Url,
                    params: {
                        actiontype: 'ReadTask',
                        TaskID: TaskID,
                        Name: Name
                    },
                    method: "POST",
                    success: function() {
                        //TaskID = '';
                        //Ext.getStore('MyAssignToStore').load();
                        //Ext.Msg.alert('', 'MyAssignment Delete Success !');
                    },
                    failure: function(response) {
                        //Ext.Msg.alert('', 'MyAssignment Delete Failure !');
                    }
                });
            }
            if (Ext.getCmp('assigntoeditpanel')) {
                var _Store = list.getStore();
                var _index = 0;
                if (TaskID != "") {
                    _index = _Store.find('TaskID', TaskID);
                }
                var _Record = _Store.getAt(_index); //_Store.getAt(index);
                Ext.getCmp('assigntoeditpanel').setRecord(_Record);
                TaskID = _Record.get('TaskID');
            }
            if (Ext.getCmp('assigntoeditpanel2')) {
                var _Store = list.getStore();
                var _index = 0;
                if (TaskID != "") {
                    _index = _Store.find('TaskID', TaskID);
                }
                var _Record = _Store.getAt(_index); //_Store.getAt(index);
                Ext.getCmp('assigntoeditpanel2').setRecord(_Record);
                TaskID = _Record.get('TaskID');
            }
            isMyAssignStoreLosd = false;
        }
    },
    onbtn_MyTaskDetailTap: function() {
        //按鈕變色提示
        //Ext.getCmp('btn_MyTaskDetail').setUi('confirm');
        //Ext.getCmp('btn_MyTaskHistory').setUi('normal');
        //按鈕顯示
        Ext.getCmp('btn_MyTaskEdit').show();
        //var editButton = this.getEditButton();
        //editButton.show();
        //this.taskdetail.setActiveItem(0);
        //按鈕隱藏
        //Ext.getCmp('btn_MyTaskComments').hide();
        if (Ext.getCmp('mytaskpanel')) {
            Ext.getCmp('mytaskpanel').setActiveItem(1);
        }
    },
    onbtn_MyTaskHistoryTap: function() {
        //按鈕變色提示
        //Ext.getCmp('btn_MyTaskDetail').setUi('normal');
        //Ext.getCmp('btn_MyTaskHistory').setUi('confirm');
        //按鈕顯示
        //Ext.getCmp('btn_MyTaskComments').show();
        //按鈕隱藏

        //var editButton = this.getEditButton();
        //editButton.hide();

        //Ext.getCmp('btn_MyTaskEdit').hide();
        if (Ext.getCmp('mytaskpanel')) {
            Ext.getCmp('mytaskpanel').setActiveItem(2);
            //this.taskdetail.setActiveItem(2);

            //更新MyTaskStore
            var CommentsList_Store = Ext.getStore('MyTaskCMListStore');
            CommentsList_Store.getProxy().config.extraParams.TaskID = TaskID;
            CommentsList_Store.load();
        }
    },
    onbtn_MyAssignToDetailTap: function() {
        //按鈕變色提示
        Ext.getCmp('btn_MyAssignToDetail').setUi('confirm');
        Ext.getCmp('btn_MyAssignToHistory').setUi('normal');
        if (Ext.getCmp('myassigntopanel')) {
            Ext.getCmp('myassigntopanel').setActiveItem(1);
        }
        //按鈕隱藏
        Ext.getCmp('btn_MyAssignToActivities').hide();
        //按鈕顯示
        Ext.getCmp('btn_MyAssignToNew').show();
        Ext.getCmp('btn_MyAssignToEdit').show();
        Ext.getCmp('btn_MyAssignToDelete').show();
    },
    onbtn_MyAssignToHistoryTap: function() {
        //按鈕變色提示
        Ext.getCmp('btn_MyAssignToDetail').setUi('normal');
        Ext.getCmp('btn_MyAssignToHistory').setUi('confirm');
        //按鈕顯示
        Ext.getCmp('btn_MyAssignToActivities').show();
        //按鈕隱藏
        Ext.getCmp('btn_MyAssignToNew').hide();
        Ext.getCmp('btn_MyAssignToEdit').hide();
        Ext.getCmp('btn_MyAssignToDelete').hide();
        if (Ext.getCmp('myassigntopanel')) {
            Ext.getCmp('myassigntopanel').setActiveItem(2);
            //更新MyTaskStore

            var CommentsList_Store = Ext.getStore('MyAssignToCMListStore');
            CommentsList_Store.getProxy().config.extraParams.TaskID = TaskID;
            CommentsList_Store.load();
        }
    },
    onbtn_MyTaskEditTap: function() {
        this._list = Ext.getCmp('mytasklist');
        if (this._list.getSelectionCount() > 0) {
            if (Ext.getCmp('mytaskpanel')) {
                Ext.getCmp('mytaskpanel').setActiveItem(3);
            }
        }
        else {
            Ext.Msg.alert('Please Choose One Taskassign !', '');
        }
    },
    onbtn_MyTaskEditSubmitTap: function() {
        if (Ext.getCmp('taskeditpanel')) {
            var _form = Ext.getCmp('taskeditpanel');
            Ext.getCmp('MyTask_Name_Edit').setValue(Name);
            _form.submit({
                url: TaskAssign_Url,
                method: 'Post',
                params: Ext.urlEncode(_form.getValues(true)),
                success: function() {
                    //更新MyTaskStore
                    Ext.getStore('MyTaskStore').load();
                    Ext.getStore('MyAssignToStore').load();
                    _form.reset();
                    //Ext.getCmp('taskdetailpanel').reset();
                    //Ext.getCmp('mytaskmainpanel').setActiveItem(0);
                    Ext.Msg.alert('Submitted Success !', '');
                },
                failure: function() {
                    Ext.Msg.alert('Submitted Failure !', '');
                }
            });
        }
    },
    oncbo_mytaskprocessChange: function(cbo, newValue, oldValue, eOpts) {
        if (newValue.data.ID == 11) {
            Ext.getCmp('cbo_mytaskstatus').setValue(3);
        }
        else if (newValue.data.ID != 1) {
            Ext.getCmp('cbo_mytaskstatus').setValue(2);
        }
    },
    oncbo_mytaskstatusChange: function(cbo, newValue, oldValue, eOpts) {
        if (newValue.data.ID == 3) {
            Ext.getCmp('cbo_mytaskprocess').setValue(11);
        }
        else if (newValue.data.ID == 1) {
            Ext.getCmp('cbo_mytaskprocess').setValue(1);
        }
        else if (newValue.data.ID == 2) {
            if (Ext.getCmp('cbo_mytaskprocess').getValue() < 2 || Ext.getCmp('cbo_mytaskprocess').getValue() > 10)
            { Ext.getCmp('cbo_mytaskprocess').setValue(10); }
        }
    },
    onbtn_MyTaskCommentsTap: function() {
        Ext.getCmp('mytaskpanel').setActiveItem(4);
    },
    onbtn_MyTaskCommentsSubmitTap: function() {
        if (Ext.getCmp('taskcomposepanel')) {
            if (Ext.getCmp('MyTaskComments') != null && Ext.getCmp('MyTaskComments').getValue() != '') {
                Ext.getCmp('CommandTaskID').setValue(TaskID);
                Ext.getCmp('CommandUser').setValue(Name);
                var _form = Ext.getCmp('taskcomposepanel');
                _form.submit({
                    //waitMsg: { message: 'Submitting', cls: 'demos-loading' },
                    url: TaskAssign_Url,
                    method: 'Post',
                    params: Ext.urlEncode(_form.getValues(true)),
                    success: function() {
                        //清空Compose
                        _form.reset();
                        //更新Commemts
                        var CommentsList_Store = Ext.getStore('MyTaskCMListStore');
                        CommentsList_Store.getProxy().config.extraParams.TaskID = TaskID;
                        CommentsList_Store.load();
                        //切換到Commemts                             
                        Ext.getCmp('mytaskpanel').setActiveItem(2);
                    },
                    failure: function() {
                        Ext.Msg.alert('Submitted Failure!', '');
                    }
                });
            }
            else {
                Ext.Msg.alert('Commemts Is Null', 'Please Enter Commemts.', Ext.emptyFn)
            }
        }
    },
    onbtn_MyAssignToActivitiesSubmitTap: function() {
        if (Ext.getCmp('assigntocomposepanel')) {
            if (Ext.getCmp('MyAssignToActivities') != null && Ext.getCmp('MyAssignToActivities').getValue() != '') {
                Ext.getCmp('ActivitiesTaskID').setValue(TaskID);
                Ext.getCmp('ActivitiesUser').setValue(Name);
                var _form = Ext.getCmp('assigntocomposepanel');
                _form.submit({
                    //waitMsg: { message: 'Submitting', cls: 'demos-loading' },
                    url: TaskAssign_Url,
                    method: 'Post',
                    params: Ext.urlEncode(_form.getValues(true)),
                    success: function() {
                        //清空Compose
                        _form.reset();
                        //更新Commemts
                        var CommentsList_Store = Ext.getStore('MyAssignToCMListStore');
                        CommentsList_Store.getProxy().config.extraParams.TaskID = TaskID;
                        CommentsList_Store.load();
                        //切換到Commemts                             
                        Ext.getCmp('myassigntopanel').setActiveItem(2);
                    },
                    failure: function() {
                        Ext.Msg.alert('Submitted Failure!', '');
                    }
                });
            }
            else {
                Ext.Msg.alert('Activities Is Null', 'Please Enter Activities.', Ext.emptyFn)
            }
        }
    },
    onbtn_MyAssignToActivitiesTap: function() {
        Ext.getCmp('myassigntopanel').setActiveItem(4);
    },
    onbtn_MyAssignToEditTap: function() {
        this._list = Ext.getCmp('myassigntolist');
        if (this._list.getSelectionCount() > 0) {
            if (Ext.getCmp('cbo_myassigntostatus').getValue() != 1) {
                Ext.getCmp('myassigntopanel').setActiveItem(6);
            }
            else {
                Ext.getCmp('myassigntopanel').setActiveItem(3);
            }
        }
        else {
            Ext.Msg.alert('Please Choose One Taskassign !', '');
        }
    },
    onbtn_MyAssignToEditSubmitTap: function() {
        if (Ext.getCmp('assigntoeditpanel')) {
            Ext.getCmp('AssignTo_Edit_Name').setValue(Name);
            if (Ext.getCmp('AssignTo_Title_Edit').getValue() == '') {
                Ext.Msg.alert('尚未填寫"標題"。', '');
                return false;
            }
            if (Ext.getCmp('cbo_AssignTo_Edit_AssignTo').getValue() == '') {
                Ext.Msg.alert('尚未指定"負責人"。', '');
                return false;
            }
            if (Ext.getCmp('MyAssign_StartDate_Edit').getValue() > Ext.getCmp('MyAssign_DueDate_Edit').getValue()) {
                Ext.Msg.alert('"起始日"不得大於"到期日"。', '');
                return false;
            }
            //協辦人
            this._strAssist = Ext.getCmp('str_Assist').getValue();
            this.ans_Assist = this.set_UserLoginName(this._strAssist, 'Assist');
            //副本知會
            this._strCCTO = Ext.getCmp('str_CCTo').getValue();
            this.ans_CCTO = this.set_UserLoginName(this._strCCTO, 'CCTo');
            if (this.ans_Assist == -1 || this.ans_CCTO == -1) {
                return false;
            }
            var _form = Ext.getCmp('assigntoeditpanel');
            _form.submit({
                url: TaskAssign_Url,
                method: 'Post',
                params: Ext.urlEncode(_form.getValues(true)),
                success: function() {
                    //取得TaskID
                    Tid_Edit = Ext.getCmp('TaskID_MyAssignToEdit').getValue();
                    //更新MyTaskStore
                    Ext.getStore('MyAssignToStore').load();
                    Ext.getStore('MyTaskStore').load();
                    _form.reset();
                    //Ext.getCmp('taskdetailpanel').reset();
                    //Ext.getCmp('mytaskmainpanel').setActiveItem(0);
                    Ext.Msg.alert('Submitted Success !', '');
                },
                failure: function() {
                    Ext.Msg.alert('Submitted Failure !', '');
                }
            });
        }
    },
    onbtn_MyAssignToEditSubmitTap2: function() {
        if (Ext.getCmp('assigntoeditpanel2')) {
            Ext.getCmp('AssignTo_Edit_Name2').setValue(Name);
            //協辦人
            this._strAssist = Ext.getCmp('str_Assist2').getValue();
            this.ans_Assist = this.set_UserLoginName(this._strAssist, 'Assist');
            //副本知會
            this._strCCTO = Ext.getCmp('str_CCTo2').getValue();
            this.ans_CCTO = this.set_UserLoginName(this._strCCTO, 'CCTo');
            if (this.ans_Assist == -1 || this.ans_CCTO == -1) {
                return false;
            }
            var _form = Ext.getCmp('assigntoeditpanel2');
            _form.submit({
                url: TaskAssign_Url,
                method: 'Post',
                params: Ext.urlEncode(_form.getValues(true)),
                success: function() {
                    //取得TaskID

                    Tid_Edit = Ext.getCmp('TaskID_MyAssignToEdit2').getValue();
                    //更新MyTaskStore
                    Ext.getStore('MyAssignToStore').load();
                    Ext.getStore('MyTaskStore').load();
                    _form.reset();
                    //Ext.getCmp('taskdetailpanel').reset();
                    //Ext.getCmp('mytaskmainpanel').setActiveItem(0);
                    Ext.Msg.alert('Submitted Success !', '');
                },
                failure: function() {
                    Ext.Msg.alert('Submitted Failure !', '');
                }
            });
        }
    },
    onbtn_MyAssignToNewTap: function() {
        var _form = Ext.getCmp('assigntonewpanel');
        _form.reset();
        Ext.getCmp('myassigntopanel').setActiveItem(5);
    },
    onbtn_MyAssignToNewSubmitTap: function() {
        if (Ext.getCmp('assigntonewpanel')) {
            //指派人
            Ext.getCmp('AssignTo_New_Name').setValue(Name);
            if (Ext.getCmp('AssignTo_Title_New').getValue() == '') {
                Ext.Msg.alert('尚未填寫"標題"。', '');
                return false;
            }
            if (Ext.getCmp('str_AssignTo_New').getValue() == '') {
                Ext.Msg.alert('尚未指定"負責人"。', '');
                return false;
            }
            if (Ext.getCmp('MyAssign_StartDate_New').getValue() > Ext.getCmp('MyAssign_DueDate_New').getValue()) {
                Ext.Msg.alert('"起始日"不得大於"到期日"。', '');
                return false;
            }
            //負責人
            this._strAssignTO = Ext.getCmp('str_AssignTo_New').getValue();
            this.ans_AssignTO = this.set_UserLoginName(this._strAssignTO, 'AssignTo_New');
            //協辦人
            this._strAssist = Ext.getCmp('str_Assist_New').getValue();
            this.ans_Assist = this.set_UserLoginName(this._strAssist, 'Assist_New');
            //副本知會
            this._strCCTO = Ext.getCmp('str_CCTo_New').getValue();
            this.ans_CCTO = this.set_UserLoginName(this._strCCTO, 'CCTo_New');
            if (this.ans == -1 || this.ans_Assist == -1 || this.ans_CCTO == -1) {
                return false;
            }
            var _form = Ext.getCmp('assigntonewpanel');
            _form.submit({
                url: TaskAssign_Url,
                method: 'Post',
                params: Ext.urlEncode(_form.getValues(true)),
                success: function(f, a) {
                    TaskID = a.msg;
                    //更新MyTaskStore
                    Ext.getStore('MyAssignToStore').load();
                    Ext.getStore('MyTaskStore').load();
                    _form.reset();
                    //Ext.getCmp('taskdetailpanel').reset();
                    //Ext.getCmp('mytaskmainpanel').setActiveItem(0);
                    Ext.Msg.alert('Submitted Success !', '');
                },
                failure: function() {
                    Ext.Msg.alert('Submitted Failure !', '');
                }
            });
        }
    },
    oncbo_AssignTo_Edit_AssignToChange: function(cbo, newValue, oldValue, eOpts) {
        Ext.getCmp('AssignTo_Edit_str_AssignTo').setValue(newValue.raw.Name);
    },
    onbtn_MyAssignToDeleteTap: function() {
        Ext.Msg.confirm("Is Delete Taskassign？", "", function(answer) {
            if (answer == 'yes') {
                this._list = Ext.getCmp('myassigntolist');
                if (this._list.getSelectionCount() > 0) {
                    if (Ext.getCmp('cbo_myassigntostatus').getValue() != 1) {
                        Ext.Msg.alert('Not Delete !', '');
                    }
                    else {
                        this._ID = this._list.getSelection()[0].raw.TaskID;
                        Ext.Ajax.request({
                            url: TaskAssign_Url,
                            params: { actiontype: 'TaskAssignStatus', TaskID: this._ID, TaskStatus: 6, ModifiedBy: Name, Name: Name },
                            method: "POST",
                            success: function() {
                                TaskID = '';
                                Ext.getStore('MyAssignToStore').load();
                                Ext.getStore('MyTaskStore').load();
                                Ext.Msg.alert('Delete Success !', '');
                            },
                            failure: function(response) {
                                Ext.Msg.alert('Delete Failure !', '');
                            }
                        });
                    }
                }
                else {
                    Ext.Msg.alert('Please Choose One Taskassign !', '');
                }
            }
        }, this);
    },
    oncbo_MyAssignStatusSelectChange: function(cbo, newValue, oldValue, eOpts) {
        //更新MyAssignToStore
        this.MyAssignTo_Store = Ext.getStore('MyAssignToStore');
        this.MyAssignTo_Store.getProxy().config.extraParams.Name = Name;
        this.MyAssignTo_Store.getProxy().config.extraParams.Status = newValue.raw.Name;
        this.MyAssignTo_Store.getProxy().config.extraParams.SearchString = Ext.getCmp('btn_MyAssignToSearch').getValue();
        this.MyAssignTo_Store.getData().sort('ModifyDate', 'Desc');
        this.MyAssignTo_Store.loadPage(1);
    },
    oncbo_MyAssignUserSelectChange: function(cbo, newValue, oldValue, eOpts) {
        //更新MyAssignToStore
        this.MyAssignTo_Store = Ext.getStore('MyAssignToStore');
        this.MyAssignTo_Store.getProxy().config.extraParams.Name = Name;
        this.MyAssignTo_Store.getProxy().config.extraParams.UserSelect = newValue.raw.ID;
        this.MyAssignTo_Store.getProxy().config.extraParams.SearchString = Ext.getCmp('btn_MyAssignToSearch').getValue();
        this.MyAssignTo_Store.loadPage(1);
    },
    oncbo_MyTaskStatusSelectChange: function(cbo, newValue, oldValue, eOpts) {
        //更新MyTaskStore
        this.MyTask_Store = Ext.getStore('MyTaskStore');
        this.MyTask_Store.getProxy().config.extraParams.Name = Name;
        this.MyTask_Store.getProxy().config.extraParams.Status = newValue.raw.Name;
        this.MyTask_Store.getData().sort('ModifyDate', 'Desc');
        this.MyTask_Store.load();
        //if(newValue.raw.Name == '已結案       ')
        //{
        //    Ext.getCmp('btn_MyTaskEdit').hide();
        //}
        //else
        //{
        //    Ext.getCmp('btn_MyTaskEdit').show();            
        //}
    },
    onbtn_MyAssignToRefreshTap: function() {
        this.MyAssignTo_Store = Ext.getStore('MyAssignToStore');
        this.MyAssignTo_Store.getProxy().config.extraParams.Name = Name;
        this.MyAssignTo_Store.getProxy().config.extraParams.SearchString = Ext.getCmp('btn_MyAssignToSearch').getValue();
        this.MyAssignTo_Store.loadPage(1);
    },
    onbtn_MyAssignToReturnSubmitTap: function() {
        this._list = Ext.getCmp('myassigntolist');
        this._ID = this._list.getSelection()[0].raw.TaskID;
        Ext.Ajax.request({
            url: TaskAssign_Url,
            params: { actiontype: 'TaskAssignStatus', TaskID: this._ID, TaskStatus: 2, ModifiedBy: Name, Name: Name },
            method: "POST",
            success: function() {
                TaskID = '';
                Ext.getStore('MyAssignToStore').load();
                Ext.Msg.alert('Taskassign Reject !', '');
            },
            failure: function(response) {
                Ext.Msg.alert('Return Failure !', '');
            }
        });
    },
    onbtn_MyAssignToCloseSubmitTap: function() {
        this._list = Ext.getCmp('myassigntolist');
        this._ID = this._list.getSelection()[0].raw.TaskID;
        Ext.Ajax.request({
            url: TaskAssign_Url,
            params: { actiontype: 'TaskAssignStatus', TaskID: this._ID, TaskStatus: 3, ModifiedBy: Name, Name: Name },
            method: "POST",
            success: function() {
                TaskID = '';
                Ext.getStore('MyAssignToStore').load();
                Ext.Msg.alert('Taskassign Comfirm !', '');
            },
            failure: function(response) {
                Ext.Msg.alert('Close Failure !', '');
            }
        });
    },
    set_UserLoginName: function(_UserDisName, _Control_ID) {
        if (_UserDisName != '') {
            this.arr = _UserDisName.split(',');
            this.store = Ext.getStore('UserListStore');
            this.username = "";
            this.ans = 0;
            for (i = 0; i < this.arr.length; i++) {
                this.int = this.store.find('Name', this.arr[i], 0, false, false, true); //精確比對
                if (this.int == -1) {
                    switch (_Control_ID) {
                        case 'AssignTo_New':
                            Ext.Msg.alert('負責人:', this.arr[i] + ' 並非公司職員。', '');
                            break;
                        case 'Assist_New':
                            Ext.Msg.alert('協辦人:', this.arr[i] + ' 並非公司職員。', '');
                            break;
                        case 'CCTo_New':
                            Ext.Msg.alert('副本知會:', +this.arr[i] + ' 並非公司職員。', '');
                            break;
                        case 'AssignTo':
                            Ext.Msg.alert('負責人:', this.arr[i] + ' 並非公司職員。', '');
                            break;
                        case 'Assist':
                            Ext.Msg.alert('協辦人:', this.arr[i] + ' 並非公司職員。', '');
                            break;
                        case 'CCTo':
                            Ext.Msg.alert('副本知會:', +this.arr[i] + ' 並非公司職員。', '');
                            break;
                        default:
                            Ext.Msg.alert('人員：', +this.arr[i] + ' 並非公司職員。', '');
                            break;
                    }
                    this.ans = -1;
                    break;
                }
                else {
                    if (this.username == "") {
                        this.username += this.store.getAt(this.int).get('ID');
                    }
                    else {
                        this.username += "," + this.store.getAt(this.int).get('ID');
                    }
                }
            }
            if (this.ans == 0) {
                Ext.getCmp(_Control_ID).setValue(this.username);
            }
            return this.ans;
        }
    },
    oncbo_MyTaskUserSelectChange: function(cbo, newValue, oldValue, eOpts) {
        //更新MyTaskStore
        this.MyTask_Store = Ext.getStore('MyTaskStore');
        this.MyTask_Store.getProxy().config.extraParams.Name = Name;
        this.MyTask_Store.getProxy().config.extraParams.UserSelect = newValue.raw.ID;
        //this.MyTask_Store.getProxy().config.extraParams.SearchString = Ext.getCmp('btn_MyTaskSearch').getValue();
        this.MyTask_Store.loadPage(1);
    },
    onbtn_MyTaskRefreshTap: function() {
        //更新MyTaskStore
        this.MyTask_Store = Ext.getStore('MyTaskStore');
        this.MyTask_Store.getProxy().config.extraParams.Name = Name;
        this.MyTask_Store.getProxy().config.extraParams.SearchString = Ext.getCmp('btn_MyTaskSearch').getValue();
        this.MyTask_Store.loadPage(1);
    },
    onbtn_MyAssignToSearchKeyup: function(field, e) {
        this.keyCode = e.event.keyCode
        if (this.keyCode == 13) {
            this._store = Ext.getStore('MyAssignToStore');
            this._store.getProxy().config.extraParams.SearchString = field.getValue();
            this._store.loadPage(1);
        }
    },
    onbtn_MyAssignToSearchCleariconTap: function(field, e) {
        this._store = Ext.getStore('MyAssignToStore');
        this._store.getProxy().config.extraParams.SearchString = '';
        this._store.loadPage(1);
    },
    onbtn_MyTaskSearchKeyup: function(field, e) {
        this.keyCode = e.event.keyCode
        if (this.keyCode == 13) {
            this._store = Ext.getStore('MyTaskStore');
            this._store.getProxy().config.extraParams.SearchString = field.getValue();
            this._store.loadPage(1);
        }
    },
    onbtn_MyTaskSearchCleariconTap: function(field, e) {
        this._store = Ext.getStore('MyTaskStore');
        this._store.getProxy().config.extraParams.SearchString = '';
        this._store.loadPage(1);
    }
});
          