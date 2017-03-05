mod.wizards.newContentElement.wizardItems {
    t3cgn {
        header = t3cgn
        elements {
            t3cgn_accordiontrigger {
                iconIdentifier = t3cgn-accordion-trigger
                title = Seiten-Akkordeon Trigger
                description = Steuert das versteckte Akkordeon auf der aktuellen Seite
                tt_content_defValues {
                    CType = t3cgn_accordiontrigger
                }
            }
            t3cgn_sponsor {
                iconIdentifier = t3cgn-sponsor
                title = Sponsorenelement
                description = Sponsoren werden angezeigt
                tt_content_defValues {
                    CType = t3cgn_sponsor
                }
            }
        }
        show := addToList(t3cgn_accordiontrigger, t3cgn_sponsor)
    }
}