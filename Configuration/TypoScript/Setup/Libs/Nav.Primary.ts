lib.navPrimary = HMENU
lib.navPrimary {

    entryLevel = 1

    ### Erste Ebene ###
    1 = TMENU
    1 {
        expAll = 0
        noBlur = 1
        wrap = <ul>|</ul>

        NO = 1
        NO.ATagTitle.field = abstract // description // title
        # NO.allWrap = |<span class="hidden">.</span>
        NO.wrapItemAndSub = <li>|</li>
        NO.stdWrap.htmlSpecialChars = 1

        CUR < .NO
        CUR = 1
        CUR.allWrap = <strong>|</strong>
        CUR.doNotLinkIt = 1
        CUR.stdWrap.htmlSpecialChars = 1

        ACT < .NO
        ACT = 1
        ACT.allWrap = <em>|</em>

        IFSUB < .NO
        IFSUB = 1
        # IFSUB.allWrap = |<span class="aural">:</span>

        ACTIFSUB < .NO
        ACTIFSUB = 1
        ACTIFSUB.allWrap = <em>|</em><span class="aural">:</span>
    }

    ### Zweite, dritte und vierte Ebene (Kopieren von erster Ebene) ###
    2 < .1
    3 < .1
    4 < .1

}
