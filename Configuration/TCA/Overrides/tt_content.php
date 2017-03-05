<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}



$contentelements = [
    'accordiontrigger' => 'accordion-trigger',
    'sponsor' => 'sponsor'
];

foreach ($contentelements as $key => $contentelement) {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
        'tt_content',
        'CType',
        [
            'LLL:EXT:t3cgn_template/Resources/Private/Language/locallang_be.xlf:t3cgn_' . $key . '.title',
            't3cgn_' . $key,
            't3cgn-'. $contentelement
        ],
        'html',
        'after'
    );
}

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
$GLOBALS['TCA']['tt_content']['types']['t3cgn_sponsor'] = [
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
