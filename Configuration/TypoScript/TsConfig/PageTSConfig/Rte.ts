RTE {
    default {
        useCSS = 1
        contentCSS = typo3conf/ext/t3cgn_template/Resources/Public/Css/rte.css
        proc {
            allowedClasses (
              external-link, external-link-new-window, internal-link, internal-link-new-window, download, mail, btn-primary, btn-default, orange
            )
            allowedClasses := addToList(btn-primary, btn-default)
        }

        buttons {
            link.properties.class.allowedClasses := addToList(btn-primary, btn-default)
            blockstyle.tags.p.allowedClasses = orange
            textstyle.tags.span.allowedClasses = orange
        }



        ## nicht benoetigte Klassen entfernen
        #RTE.default.proc.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)
        buttons {
            RTE.classesAnchor.btn-primary {
                name = Button (border orange)
                value =
            }
        }

        classesAnchor.default {
            page = btn-default
            url = external-link-new-window
            file = download
            mail = mail
        }
   }
}