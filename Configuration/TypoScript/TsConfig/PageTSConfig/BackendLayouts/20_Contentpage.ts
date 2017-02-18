mod.web_layout.BackendLayouts {
    20_Contentpage {
        title = LLL:EXT:t3cgn_template/Resources/Private/Language/locallang.backend.xlf:backend_layout.contentpage.title
        icon = EXT:t3cgn_template/Resources/Public/BackendLayouts/10_contentpage.gif
        config {
            backend_layout {
                colCount = 1
                rowCount = 3
                rows {
                    1 {
                        columns {
                            1 {
                                name = mainTop
                                colPos = 1
                            }
                        }
                    }
                    2 {
                        columns {
                            1 {
                                name = mainMiddle
                                colPos = 2
                            }
                        }
                    }
                    3 {
                        columns {
                            1 {
                                name = mainBottom
                                colPos = 3
                            }
                        }
                    }
                }
            }
        }
    }
}