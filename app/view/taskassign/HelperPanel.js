Ext.define('GeoCon.view.taskassign.HelperPanel', {
    extend: 'Ext.Carousel',
    xtype: 'helperpanel',
    config: {
        direction: 'vertical',
        defaults: {
        //styleHtmlContent: true,
        },
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Helper',
            items: [{
                iconMask: true,
                iconCls: 'reply',
                ui: 'back',
                id: 'btn_MyTaskAssignBack'
            }]
            },
        {
            html: '<div style="text-align : center;"><img src="resources/images/Help/TaskAssignMobile-01.png" alt="TaskAssignMobile-01" width="320px" /></div>'
            //'<img src="resources/images/Help/TaskAssignMobile-01.png" alt="TaskAssignMobile-01" width="360px" />'
        }, {
            html: '<div style="text-align : center;"><img src="resources/images/Help/TaskAssignMobile-02.png" alt="TaskAssignMobile-02" width="320px" /></div>'
        }, {
            html: '<div style="text-align : center;"><img src="resources/images/Help/TaskAssignMobile-03.png" alt="TaskAssignMobile-03" width="320px" /></div>'
        }, {
            html: '<div style="text-align : center;"><img src="resources/images/Help/TaskAssignMobile-04.png" alt="TaskAssignMobile-04" width="320px" /></div>'
        }, {
            html: '<div style="text-align : center;"><img src="resources/images/Help/TaskAssignMobile-05.png" alt="TaskAssignMobile-05" width="320px" /></div>'
        }, {
            html: '<div style="text-align : center;"><img src="resources/images/Help/TaskAssignMobile-06.png" alt="TaskAssignMobile-06" width="320px" /></div>'
        }]
    }
});
