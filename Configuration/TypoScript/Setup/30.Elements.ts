lib.fluidContent {
    templateRootPaths.4711 = EXT:t3cgn_template/Resources/Private/Templates/Content/
    partialRootPaths.4711 = EXT:t3cgn_template/Resources/Private/Partials/
    layoutRootPaths.4711 = EXT:t3cgn_template/Resources/Private/Layouts/
}

tt_content {
    t3cgn_accordiontrigger < lib.fluidContent
    t3cgn_accordiontrigger.templateName = Accordiontrigger
    t3cgn_sponsor < lib.fluidContent
    t3cgn_sponsor {
        templateName = Sponsor
        dataProcessing {
            100 = T3CGN\T3cgnTemplate\DataProcessing\ContentElementProcessor
            100 {
                references.fieldName = media
                as = files
            }
        }
    }
}