page.10 = FLUIDTEMPLATE
page.10 {
    file.stdWrap.cObject = TEXT
    file.stdWrap.cObject {
        data = levelfield:-1, backend_layout_next_level, slide
        override.field = backend_layout
        split {
            token = pagets__
            1.current = 1
            1.wrap = |
        }
        wrap = EXT:t3cgn_template/Resources/Private/Templates/Page/|.html
    }

    layoutRootPaths.0  = EXT:t3cgn_template/Resources/Private/Layouts/
    partialRootPaths.0 = EXT:t3cgn_template/Resources/Private/Partials/

    variables {

        # navigation libs
        navMeta       = < lib.navMeta
        navBreadcrumb = < lib.navBreadcrumb
        navPrimaryDesktop    = < lib.navPrimaryDesktop
        navPrimaryMobile    = < lib.navPrimary
        navLanguage   = < lib.navLanguage

        # Header
        headerTitle       = TEXT
        headerTitle.value = {$config.headerTitle}

        # content
        mainTop < styles.content.get
        mainTop.select.where = colPos=1
        mainMiddle < styles.content.get
        mainMiddle.select.where = colPos=2
        mainBottom < styles.content.get
        mainBottom.select.where = colPos=3

        marginal = CONTENT
        marginal.table = tt_content
        marginal.select.orderBy = sorting
        marginal.select.where = colPos=2

    }
}
