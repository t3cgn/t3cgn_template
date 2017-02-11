################
#### CONFIG ####
################
config {
    no_cache                            = {$config.no_cache}
    uniqueLinkVars                      = 1
    pageTitleFirst                      = 1
    renderCharset                       = utf-8
    metaCharset                         = utf-8
    doctype                             = html5
    removeDefaultJS                     = external
    inlineStyle2TempFile                = 1
    admPanel                            = {$config.admPanel}
    debug                               = {$config.debug}
    cache_period                        = 43200
    sendCacheHeaders                    = 0
    intTarget                           =
    extTarget                           =
    disablePrefixComment                = 1
    index_enable                        = 1
    index_externals                     = 1


    // Disable Image Upscaling
    noScaleUp                           = 1

    // Language Settings (will be configured in lib/language)
    #linkVars                            = L(int)
    #sys_language_uid                    = 0
    #sys_language_overlay                = 1
    #sys_language_mode                   = content_fallback
    #language                            = en
    #locale_all                          = de_DE.UTF-8
    #htmlTag_setParams                   = lang="de" dir="ltr" class="no-js"

    // Compression and Concatenation of CSS and JS Files
    compressJs                          = {$config.compressJs}
    compressCss                         = {$config.compressCss}
    concatenateJs                       = {$config.concatenateJs}
    concatenateCss                      = {$config.concatenateCss}
}
