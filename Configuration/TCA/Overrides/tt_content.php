<?php

(function () {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
        'tt_content',
        'CType',
        [
            'Seiten-Akkordeon Trigger',
            't3cgn_accordiontrigger',
            't3cgn-accordion-trigger'
        ],
        'html',
        'after'
    );

    $frontendLanguagePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';
    $GLOBALS['TCA']['tt_content']['types']['t3cgn_accordiontrigger'] = [
        'showitem' => '
                --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:general,
                    --palette--;' . $frontendLanguagePrefix . 'palette.general;general,
                    header,
                --div--;' . $frontendLanguagePrefix . 'tabs.appearance,
                    --palette--;' . $frontendLanguagePrefix . 'palette.frames;frames,
                    --palette--;' . $frontendLanguagePrefix . 'palette.appearanceLinks;appearanceLinks,
                --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
                    --palette--;;language,
                --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:access,
                    --palette--;;hidden,
                    --palette--;' . $frontendLanguagePrefix . 'palette.access;access,
                --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:categories,
                    categories,
                --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,
                    rowDescription,
                --div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:extended,
            ',
        'columnsOverrides' => [
            'header' => [
                'label' => 'Buttontext:'
            ]
        ]
    ];
})();
