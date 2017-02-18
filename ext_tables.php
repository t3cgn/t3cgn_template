<?php

if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

/**
 * Adding page- and user tsconfig
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3cgn_template/Configuration/TypoScript/TsConfig/pageTSConfig.ts">'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3cgn_template/Configuration/TypoScript/TsConfig/userTSConfig.ts">'
);

$iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
$iconRegistry->registerIcon(
    't3cgn-accordion-trigger',
    \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
    array(
        'source' => 'EXT:t3cgn_template/Resources/Public/Icons/accordion-trigger.svg'
    )
);
