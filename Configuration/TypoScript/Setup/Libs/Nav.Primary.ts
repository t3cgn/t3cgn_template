lib.navPrimary = HMENU
lib.navPrimary {
    special = directory
    special.value = 1
    1 = TMENU
    1 {
        noBlur = 1
        expAll = 1
        wrap (
            <nav class="navbar navbar-toggleable navigationPrimary">

                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigationPrimary" aria-controls="navigationPrimary" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                 <div class="collapse navbar-collapse" id="navigationPrimary">
                    <ul class="navbar-nav mr-auto gooey-menu">
                        |
                    </ul>
                </div>
            </nav>
        )
        NO = 1
        NO.stdWrap.htmlSpecialChars = 0
        NO.wrapItemAndSub.insertData=1
        NO.wrapItemAndSub = <li class="nav-item m{field:uid} p{field:pid}">|</li>
        NO.ATagParams = class="nav-link"
        ACT < .NO
        ACT.wrapItemAndSub= <li class="nav-item active m{field:uid} p{field:pid}">|</li>
        CUR < .NO
        CUR.wrapItemAndSub= <li class=" nav-item active current m{field:uid} p{field:pid}">|</li>
        IFSUB < .NO
        IFSUB.wrapItemAndSub= <li class="dropdown nav-item m{field:uid} p{field:pid}">|</li>
        IFSUB.ATagParams = class="nav-link dropdown-toggle"
        ACTIFSUB < .NO
        ACTIFSUB.wrapItemAndSub= <li class="dropdown nav-item active ifsub m{field:uid} p{field:pid}">|</li>
        ACTIFSUB.ATagParams = class="nav-link dropdown-toggle"
        CURIFSUB < .NO
        CURIFSUB.wrapItemAndSub= <li class="dropdown nav-item active current ifsub m{field:uid} p{field:pid}">|</li>
        CURIFSUB.ATagParams = class="nav-link dropdown-toggle"
    }
    2 < .1 {
        wrap = <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">|</div>
        NO.ATagParams = class="dropdown-link"
    }
}