/*
====================================== Bài 1 ========================================
Câu hỏi:
    student.name có bị đổi không?
    student.parent.name có bị đổi không?
    Giải thích vì sao?

Trả lời:
 - student.name: Không bị thay đổi
 - student.parent.name: Bị thay đổi

 - vì: 
    + khi viết mentor = { ...student } nó sẽ tạo ra ô nhớ mới và
    toán tử "..." nó sẽ sao chép các cặp key và value của student vào ô nhớ của nó,
    và chính vì nó tạo ra ô nhớ mới của nó rồi nên khi thay đổi value hoặc thêm key và value thì
    nó sẽ không bị ảnh hưởng đến thằng student nữa.

    + Nhưng mà khi viết "student.parent.name" thì thằng students vẫn bị thay đổi là bởi vì
    toán tử "..." nó chỉ có thể sao chép nông tức là một cấp.

    ví dụ:  
        student.name: 0x01
        student.parent: 0x02
        mentor.parent.name: 0x03

    Thì toán tử "..." nó chỉ copy (tạo ô nhớ cho riêng nó) được đến "student.parent: 0x02" thôi
    nên "mentor.parent.name" vẫn là "0x03" cho nên thằng "student" và thằng "mentor" nó cùng tham chiếu
    đến ô nhớ "0x03" này.
    => khi thay đổi sẽ thay đổi giá trị trong "0x03"
    

    
======================================= Bài 2 =========================================================
Câu hỏi:
    student.parent.name có bị ảnh hưởng không?
    Vì sao cách này khác spread (const mentor = { ...student })

Trả lời:
    - "student.parent.name" của thằng student sẽ không bị ảnh hưởng

    - Vì: đầu tiên "JSON.stringify(student)" nó sẽ biến object student thành dạng JSON (dạng String) để gán cho nó
        khi thành chuổi string rồi nó sẽ kiểu: "{"name":"hoang","parent":{"name":"bo hoang"}}"
        chính vì thành kiểu "string" rồi nên nó lưu giá trị chứ không phải là địa chỉ ô nhớ nữa
        và "JSON.parse" nó lại chuyển cái chuỗi trên thành các kiểu của javascript ở đây là "object"

        => "mentor" sẽ tạo và lưu địa chỉ các ô nhớ riêng biệt nên "student.parent.name" không bị ảnh hưởng


======================================= Bài 3 ===============================================
Câu hỏi:
    Mảng có bị thay đổi không?
    Phần tử bên trong có bị không?

Trả lời:
    - Array students không bị thay đổi vẫn còn 2 phần tử trong đó
    - Phần tử bên trong Array student sẽ bị thay đổi giá trị
    bởi vì nó chọc đến thuộc tính "name" của phần tử đó nên nó bị tham chiếu
    vi toán tử "..." nó copy nông


====================================== Bài 4 ===========================================
Câu hỏi: Kết quả là bao nhiêu? Vì sao?

Trả lời:
    Kết quả sẽ là: 999

    Vì:
        toán tử "..." copy nông (Shallow Copy) chỉ copy được địa chỉ ô nhớ của cấp đầu
        nên "newUser" vẫn cùng tham chiếu đến địa chỉ của cấp con "user"
 */
