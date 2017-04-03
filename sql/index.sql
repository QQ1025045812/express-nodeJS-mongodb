--banner
create table xt_banner(
  id_banner int not null primary key auto_increment,
  img_banner varchar(225) not null,
  desc_banner text not null
)
--adminlogin
create table xt_damin(
  user_id int primary key not null auto_increment,
  username varchar(225) not null,
  password varchar(225) not null
)
--products
create table xt_products(
  id_pro int primary key not null auto_increment,
  name_pro varchar(225) not null,
  type_pro varchar(225) not null,
  brand_pro varchar(225) not null,
  place_pro varchar(225) not null,
  application_area varchar(225) not null,
  atandard_pro varchar(225) not null, 
  number_pro varchar(225) not null,
  desc_pro text not null,
  img_pro varchar(225) not null
)