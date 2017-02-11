<?php

if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}

if (TYPO3_MODE === 'BE') {
    $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutDataProvider']['file']
        = 'T3CGN\\T3cgnTemplate\\Provider\\FileProvider';

	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutFileProvider']['dir'][]
		=  'EXT:t3cgn_template/Configuration/TypoScript/PageTSConfig/BackendLayouts/';

}