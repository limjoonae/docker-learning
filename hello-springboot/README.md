## Hello Spring-Boot Project
" ก่อน build Dcoker Image ได้ อย่าลืมสร้างไฟล์ .jar ของโปรเจค ด้วยการรันคำสั่ง"
````
$ mvn package
````

"สร้าง image ของ  project นี้ได้ โดยใช้คำสั่ง"
````
$ docker build -t hello-springboot .
````
