<?php

if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

/**
 * Default TypoScript
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
    $_EXTKEY,
    'Configuration/TypoScript',
    'T3CGN Template'
);

/**
 * Adding page- and user tsconfig
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3cgn_template/Configuration/TypoScript/TsConfig/pageTSConfig.ts">'
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3cgn_template/Configuration/TypoScript/TsConfig/userTSConfig.ts">'
);
