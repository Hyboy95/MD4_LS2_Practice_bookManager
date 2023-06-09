drop database book_manager;
create database book_manager;
use book_manager;

create table books(
	id int primary key auto_increment,
    name varchar(50),
    price int check (price > 0),
    status varchar(15),
    author varchar(50)
);

insert into books(name, price, status, author)
values	('Dế Mèn Phiêu Lưu Ký', 50000, 'new', 'Kim Đồng'),
		('Lập trình JS', 100000, 'new', 'CodeGym');
