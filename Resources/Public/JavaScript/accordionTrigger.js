var T3CGN = T3CGN || {};
T3CGN.accordionTrigger = function () {
    var triggerButtons = $('.accordionTrigger');
    var hiddenSegment = document.getElementById('hiddenSegment');

    if (hiddenSegment) {
        triggerButtons.on('click', function () {
            $(hiddenSegment).collapse('toggle');
        });

        $(hiddenSegment)
            .on('show.bs.collapse', function () {
                triggerButtons.addClass('open');
            })
            .on('hide.bs.collapse', function () {
                triggerButtons.removeClass('open');
            })
        ;
    }
};