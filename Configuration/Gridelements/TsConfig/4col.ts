tx_gridelements.setup.t3cgn_4col {
    title = Vier Spalten
#    Aktuell keine Flexform-Config wegen Bug in EXT:gridelements (https://forge.typo3.org/issues/78968)
#    flexformDS = FILE:EXT:t3cgn_template/Configuration/Gridelements/FlexForm/2col.xml

    config {
        colCount = 4
        rowCount = 1

        rows.1.columns {
            1 {
                name = Links
                colPos = 101
            }
            2 {
                name = Mitte Links
                colPos = 102
            }
            3 {
                name = Mitte Rechts
                colPos = 103
            }
            4 {
                name = Rechts
                colPos = 104
            }
        }
    }
}