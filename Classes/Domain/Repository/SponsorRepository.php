<?php
namespace T3CGN\T3cgnTemplate\Domain\Repository;

    /***************************************************************
     *  Copyright notice
     *  (c) 2016 Michael Blunck <mi.blunck@gmail.com>
     *  All rights reserved
     *  This script is part of the TYPO3 project. The TYPO3 project is
     *  free software; you can redistribute it and/or modify
     *  it under the terms of the GNU General Public License as published by
     *  the Free Software Foundation; either version 3 of the License, or
     *  (at your option) any later version.
     *  The GNU General Public License can be found at
     *  http://www.gnu.org/copyleft/gpl.html.
     *  This script is distributed in the hope that it will be useful,
     *  but WITHOUT ANY WARRANTY; without even the implied warranty of
     *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     *  GNU General Public License for more details.
     *  This copyright notice MUST APPEAR in all copies of the script!
     ***************************************************************/

/**
 * Class SponsorRepository
 * @package T3CGN\T3cgnTemplate\Domain\Repository
 */
class SponsorRepository extends Repository
{


    /**
     * Find by content element uid
     *
     * @param int $uid
     *
     * @return mixed
     */
    public function findByContentelementUid($uid)
    {
        $rawUids = $GLOBALS['TYPO3_DB']->exec_SELECTgetRows(
            'uid_foreign',
            'tx_t3cgn_sponsor_ttcontent_mm',
            'uid_local =' . (int) $uid,
            '',
            '',
            '',
            'uid_foreign'
        );
        $trader  = array();
        if (is_array($rawUids) && ! empty( $rawUids )) {
            // after we fetched the uid from the raw contact entries on db level,
            // we now fetch the whole extbase object for each uid (extbase does the validity check for us)
            $query = $this->createQuery();
            $query->matching($query->in('uid', array_keys($rawUids)));
            $trader = $query->execute();
        }

        return $trader;
    }
}
