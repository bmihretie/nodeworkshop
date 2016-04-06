\c trainrequest
-- in cloud 9, start the postgres service:
-- sudo service postgresql start

-- connect:
-- sudo sudo -u postgres psql

-- get to the filesystem while still logged in as super user
-- \! 

-- run this file
-- psql -f employeeinfo.sql




create table employeeinfo (
    name text,
  Cntct_Email_Addr varchar(65) NOT NULL
 );

create role nodeuser with password '13149700' login;
grant connect on database trainrequest to nodeuser;
grant select on public.employeeinfo to nodeuser;

insert into employeeinfo (name, Cntct_Email_Addr) values ('ALAN TANG', 'ALAN_TANG@TTX.COM');
insert into employeeinfo (name, Cntct_Email_Addr) values ('SCOTT Wissel', 'SCOTT.WISSEL@TTX.COM');
insert into employeeinfo (name, Cntct_Email_Addr) values ('KATHY MILLER', 'KATHY_MILLER@TTX.COM');
insert into employeeinfo (name, Cntct_Email_Addr) values ('ORLINE CACAYAN', 'ORLINE_CACAYAN@TTX.COM');
insert into employeeinfo (name, Cntct_Email_Addr) values ('PURNESH RUSTAGI', 'PURNESH.RUSTAGI@TTX.COM');
insert into employeeinfo (name, Cntct_Email_Addr) values ('KENDALL ZETTLMEIER', 'KENDALL.ZETTLMEIER@TTX.COM');
insert into employeeinfo (name, Cntct_Email_Addr) values ('JACQUELINE DUKES', 'JACQUELINE.DUKES@TTX.COM');
insert into employeeinfo (name, Cntct_Email_Addr) values ('RICH ROUSSEAU', 'RICH.ROUSSEAU@TTX.COM');




