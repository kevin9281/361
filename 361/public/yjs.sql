SET NAMES UTF8;
DROP DATABASE IF EXISTS yjs;
CREATE DATABASE yjs CHARSET=UTF8;
USE yjs;

/*用户信息*/
CREATE TABLE yjs_user( 
  id INT PRIMARY KEY AUTO_INCREMENT,  # id 自增
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16)
);

/*用户信息导入*/
INSERT INTO yjs_user VALUES
(NULL, 'xiaohong', '123456','13501234567'),
(NULL, 'xiaohuang', '123456','13501234568'),
(NULL, 'xiaozi', '123456','13501234569'),
(NULL, 'xiaolv', '123456','13501234560'),
(NULL, 'xiaobai', '123456','13501234560'),
(NULL, 'xiaofen', '123456','13501234560'),
(NULL, 'xiaohei', '123456','13501234560'),
(NULL, 'xiaobai', '123456','13501234560');
 
 



CREATE TABLE yjs_detail_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  sm varchar(128),
  mg varchar(128),
  mg2 varchar(128),
  mg3 varchar(128),
  mg4 varchar(128),
  lg varchar(128),
  lg2 varchar(128),
  lg3 varchar(128),
  lg4 varchar(128)
);
INSERT INTO yjs_detail_pic VALUES(null,'images/s_5a1faa0483d2c.jpg','images/m_5a1faa0483d2c.jpg','images/m_5a1faa04cdba4.jpg','images/m_5a1faa052aee2.jpg',
'images/m_5a1faa057887e.jpg',
'images/5a1faa0483d2c.jpg',
'images/5a1faa04cdba4.jpg',
'images/5a1faa052aee2.jpg',
'images/5a1faa057887e.jpg');
INSERT INTO yjs_detail_pic VALUES(null,'images/s_5a1faa05c23db.jpg','images/5a1faa05c23db.jpg','images/5a1faa061a096.jpg','images/5a1faa06663f2.jpg',
'images/5a1faa06b130a.jpg',
'images/5a1faa05c23db.jpg',
'images/5a1faa061a096.jpg',
'images/5a1faa06663f2.jpg',
'images/5a1faa06b130a.jpg');
INSERT INTO yjs_detail_pic VALUES(null,'images/s_5a1faa070d5cf.jpg','images/5a1faa070d5cf.jpg','images/5a1faa075a6df.jpg','images/5a1faa07a9521.jpg',
'images/5a1faa0804484.jpg',
'images/5a1faa070d5cf.jpg',
'images/5a1faa075a6df.jpg',
'images/5a1faa07a9521.jpg',
'images/5a1faa0804484.jpg');
INSERT INTO yjs_detail_pic VALUES(null,'images/s_5a1faa0850a6b.jpg','images/5a1faa0850a6b.jpg','images/5a1faa089b06a.jpg','images/5a1faa08e9bb1.jpg',
'images/5a1faa09404c8.jpg',
'images/5a1faa0850a6b.jpg',
'images/5a1faa089b06a.jpg',
'images/5a1faa08e9bb1.jpg',
'images/5a1faa09404c8.jpg');