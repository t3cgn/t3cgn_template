lib.navLanguage = HMENU
lib.navLanguage {
    special = language
    special.value = 0, 1
    special.normalWhenNoLanguage = 0
    wrap = <ul>|</ul>
    1 = TMENU
    1 {
        NO = 1
        NO.linkWrap = <li id="langEN">|</li> || <li id="langDE">|</li> || <li id="langFR">|</li> || <li id="langIT">|</li> || <li id="langRU">|</li> || <li id="langTR">|</li>
        NO.stdWrap.override = <span>English</span> || <span>Deutsch</span> || <span>Version française</span> || <span>Versione italiano</span> || <span>к русской версии</span> || <span>Türkçe versiyona geç</span>
        NO.ATagTitle = Switch to english website || Springe zur deutschen Seite || Passer au site français || Vai al sito web italiano || Переключить на российском сайте || Türk web sitesine atlamak
        NO.stdWrap.current = 1
        ACT < .NO
        ACT.doNotLinkIt = 1
        ACT.stdWrap.wrap = <strong><span>|</span></strong>
        USERDEF1 < .NO
        USERDEF1.doNotLinkIt = 1
        USERDEF1.stdWrap.wrap = <strong class="disable"><span>|</span></strong>
    }
}

config {
    linkVars = L(int)

    sys_language_uid = 0
    language = en
    locale_all = en_GB.UTF-8
    htmlTag_langKey = en_GB
    htmlTag_setParams = lang="en" dir="ltr"

    sys_language_overlay = hideNonTranslated
    sys_language_mode = content_fallback
}

[globalVar = GP:L=1]
config {
    sys_language_uid = 1
    language = de
    locale_all = de_DE.UTF-8
    htmlTag_langKey = de
    htmlTag_setParams = lang="de" dir="ltr"
}
[global]
