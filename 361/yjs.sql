#设置连接服务器使用的编码
SET NAMES UTF8;
#创建一个数据库，如果存在就丢弃。
DROP DATABASE IF EXISTS yjs;
#创建数据库 设置储存的编码。
CREATE DATABASE yjs CHARSET=UTF8;
#进入数据库
USE yjs;

/*创建用户信息表*/
CREATE TABLE yjs_user( 
  id INT PRIMARY KEY AUTO_INCREMENT, 
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16)
);

#插入用户数据
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


/*创建商城数据表*/
CREATE TABLE yjs_commodit( 
  lid INT PRIMARY KEY AUTO_INCREMENT, 
  title VARCHAR(32),
  price VARCHAR(32),
  lg VARCHAR(128),
  mg VARCHAR(128),
  lg2 VARCHAR(128),
  mg2 VARCHAR(128)
);

INSERT INTO yjs_commodit VALUES(null,"套头卫衣","¥199","images/b_5c10cb5b98955.jpg","images/m_5c10cb5b98955.jpg","images/b_5c10cb59cf5cd.jpg","images/m_5c10cb59cf5cd.jpg");
INSERT INTO yjs_commodit VALUES(null,"套头卫衣","¥259","images/b_5c0e287b37f5d.jpg","images/m_5c0e287b37f5d.jpg","images/b_5c0e287c78b1b.jpg","images/m_5c0e287c78b1b.jpg");
INSERT INTO yjs_commodit VALUES(null,"连帽开襟卫衣","¥359","images/b_5c0e30052adb0.jpg","images/m_5c0e30052adb0.jpg","images/b_5c0e3003d1cbb.jpg","images/m_5c0e3003d1cbb.jpg");
INSERT INTO yjs_commodit VALUES(null,"翻领短T袖","¥159","images/b_5b8354b1251d9.jpg","images/m_5b8354b1251d9.jpg","images/b_5b8354b266c7d.jpg","images/m_5b8354b266c7d.jpg");

