<?php

if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}
$boot = function ($extensionKey) {

    /**
     * Adding page- and user tsconfig
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3cgn_template/Configuration/TypoScript/TsConfig/pageTSConfig.ts">'
    );
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3cgn_template/Configuration/TypoScript/TsConfig/userTSConfig.ts">'
    );


    $tables = [
        'tx_t3cgn_domain_model_sponsor'
    ];

    foreach ($tables as $table) {
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addLLrefForTCAdescr($table,
            'EXT:t3cgn_template/Resources/Private/Language/locallang_csh_' . $table);
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::allowTableOnStandardPages($table);
    }


    $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);

    $newIcons = [
        't3cgn-sponsor' => 'money',
        't3cgn-accordion-trigger' => 'hand-o-down',
    ];

    foreach ($newIcons as $key => $icon) {
        $iconRegistry->registerIcon(
            $key, \TYPO3\CMS\Core\Imaging\IconProvider\FontawesomeIconProvider::class,
            ['name' => $icon]
        );
    }

};
$boot($_EXTKEY);
unset($boot);