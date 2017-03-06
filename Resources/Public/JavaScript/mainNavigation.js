var T3CGN = T3CGN || {};
T3CGN.mainNavigation = function () {

    var menuButtonGeneral = $('.menu-open-button');
    var menuButtonDesktop = $('.desktop .menu-open-button');
    var menu = $('.navigationPrimary.desktop');

    menuButtonGeneral.click(function () {
        $(this).toggleClass('on');
        $('.fadeOutContainer').toggleClass('hide');
        $('.stars').toggleClass('contentDisabled');
    });

    menuButtonDesktop.click(function() {
        menu.toggleClass('clicked');
    });

};