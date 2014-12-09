/**
* Splash screen
*/
Ext.define('GeoCon.view.Splash', {
    extend: 'Ext.Container',
    id: 'splashScreen',
    requires: [
        'GeoCon.view.splash.Background',
        'GeoCon.view.splash.TaskAssign',
        'GeoCon.view.splash.ChooseSystem',
        'GeoCon.view.splash.Setting'
    ],

    config: {
        layout: {
            type: 'card'//,
            //animation: {
            //    type: 'flip'
            //}
        },
        activeItem: 3,
        items: [{
            // 登入畫面
            xclass: 'GeoCon.view.splash.Setting'
        }, {
            // 背景畫面
            xclass: 'GeoCon.view.splash.Background'//setActiveItem(1)
        }, {
            // TaskAssign
            xclass: 'GeoCon.view.splash.TaskAssign'//setActiveItem(2)      
        }, {
            // Choose System
            xclass: 'GeoCon.view.splash.ChooseSystem'//setActiveItem(3)
        }]
    }//,

    //animateTo: function (dir) {
    //    Ext.getCmp('viewport').getLayout().setAnimation({
    //        duration: 300,
    //        easing: 'ease-in-out',
    //        type: 'slide',
    //        direction: dir
    //    });
    //}

});
