tx_gridelements.setup.t3cgn_3col {
    title = Drei Spalten
#    Aktuell keine Flexform-Config wegen Bug in EXT:gridelements (https://forge.typo3.org/issues/78968)
#    flexformDS = FILE:EXT:t3cgn_template/Configuration/Gridelements/FlexForm/2col.xml

    config {
        colCount = 3
        rowCount = 1

        rows.1.columns {
            1 {
                name = Links
                colPos = 101
            }
            2 {
                name = Mittig
                colPos = 102
            }
            3 {
                name = Rechts
                colPos = 103
            }
        }
    }
}