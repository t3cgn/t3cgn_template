lib.navMeta = HMENU
lib.navMeta {

    special = directory
    special.value = {$config.pids.Meta}

    1 = TMENU
    1 {
        wrap = <ul class="metaNavigation">|</ul>
        expAll = 1
        NO.wrapItemAndSub = <li>|</li>

        CUR < .NO
        CUR = 1
        CUR.allWrap = <strong>|</strong>
        CUR.doNotLinkIt = 1
        CUR.stdWrap.htmlSpecialChars = 1
    }

}