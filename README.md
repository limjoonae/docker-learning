## Docker Learning

### การรัน docker-compose แบบไม่ auto start container
1. รันเพื่อ build image ด้วยคำสั่ง `docker-compose build`
2. สร้าง service หรือ container ด้วยคำสั่ง  `docker-compose create`
3. start service หรือ container ด้วยคำสั่ง  `docker-compose start`

### การรัน docker-compose แบบ auto start container
- รันเพื่อ build image พร้อมกับ start container ด้วยคำสั่ง  `docker-compose up -d`

###### Run Step by Dependency
1. config
2. eureka
3. zuul
4. auth
5. services