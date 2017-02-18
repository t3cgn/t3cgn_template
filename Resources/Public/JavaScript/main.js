$( document ).ready(function() {

    if($('.homepage').length) {
        T3CGN.parallaxHomepage();
    }

    T3CGN.mainNavigation();

    if($('.accordionTrigger').length) {
        T3CGN.accordionTrigger();
    }
});