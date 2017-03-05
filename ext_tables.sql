#
# Table structure for table 'tx_t3cgn_domain_model_sponsor'
#
CREATE TABLE tx_t3cgn_domain_model_sponsor (

  uid   int(11)   NOT NULL AUTO_INCREMENT,
  pid   int(11) default '0'  NOT NULL,

  title varchar(255) default ''  NOT NULL,
  link  varchar(255) default ''  NOT NULL,
  image int(11) default '0'  NOT NULL,
  record    int(11) default '0'  NOT NULL,
  bodytext    text,


  tstamp    int(11) unsigned default '0'    NOT NULL,
  crdate    int(11) unsigned default '0'    NOT NULL,
  cruser_id    int(11) unsigned default '0'    NOT NULL,
  deleted   tinyint(4) unsigned default '0' NOT NULL,
  hidden    tinyint(4) unsigned default '0' NOT NULL,
  starttime    int(11) unsigned default '0'    NOT NULL,
  endtime   int(11) unsigned default '0'    NOT NULL,

  t3ver_oid    int(11) default '0'  NOT NULL,
  t3ver_id  int(11) default '0'  NOT NULL,
  t3ver_wsid   int(11) default '0'  NOT NULL,
  t3ver_label   varchar(255) default ''  NOT NULL,
  t3ver_state   tinyint(4) default '0'   NOT NULL,
  t3ver_stage   int(11) default '0'  NOT NULL,
  t3ver_count   int(11) default '0'  NOT NULL,
  t3ver_tstamp     int(11) default '0'  NOT NULL,
  t3ver_move_id    int(11) default '0'  NOT NULL,

  sys_language_uid int(11) default '0'  NOT NULL,
  l10n_parent   int(11) default '0'  NOT NULL,
  l10n_diffsource  MEDIUMBLOB,

  PRIMARY KEY (uid),
  KEY parent (pid),
  KEY t3ver_oid (t3ver_oid, t3ver_wsid),
  KEY language (l10n_parent, sys_language_uid)

);
