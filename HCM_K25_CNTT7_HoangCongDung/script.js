let currentOrderCode = "";
let isOrderValid = false;
let totalRevenue = 0;
let totalOrders = 0;
let check ;

do {
    console.log ("==============================")
    console.log ("HỆ THỐNG THANH TOÁN NHÀ SÁCH TRI THỨC")
    console.log ("==============================")
    console.log ("1. Nhập và kiếm chuẩn mã đơn hàng")
    console.log ("2. Tính tiền đơn sách")
    console.log ("3. Thẩm định mã hóa đơn may mắn")
    console.log ("0. Thoát chương trình")
    console.log ("==============================")
   
    choice = Number(promt("Vui lòng chọn thao tác:  "))
    switch(choice){
        case 1:
            currentOrderCode = "";
            isOrderValid = false;
            OrderCode = promt("Nhập mã đơn hàng: ")

            newOrderCode= OrderCode.toUpperCase().strim()
            if (newOrderCode.leght < 6){
                console.log ("Lỗi: Độ dài nhỏ hơn 6 ký tự")
            }
            else if (newOrderCode.starswitch("BOK-") === false){
                console.log("Mã đơn hàng phải bắt đầu bằng BOK-")}
            else if (newOrderCode.typeof(" ") === false){
                console.log("Không được để trống mã đơn hàng")}
            else {
                currentOrderCode += newOrderCode
                isOrderValid = true}
                
            break;  
        case 2:
            if (isOrderValid = false){
                console.log ("Vui lòng chọn về chức năng 1 để nhập dữ liệu!!!")}
                
            else {
                let bookCount = Number(prompt("Nhập số cuốn sách:  "))
                let pricePerBook = Number(prompt("Nhập giá mỗi cuốn sách:  "))}
                let priceBook = bookCount * pricePerBook
                let discount = priceBook * 0.1
                let pricePack = (priceBoook - discount) * 0.08
                let priceTotal = (priceBoook - discount) + pricePack
            if (bookCount <= 0 && pricePerBook <= 0 || bookCount === null || bookCount === " " ) {
                console.log("Yêu cầu không hợp lệ, vui lòng nhập là số nguyên không để trông")
            }
                else if {
                
                
            }
            break;
        case 3:
            break;
        case 0:
            console.log ("Thoát chương trình!!")
            break
        default:
            console.log ("Lựa chọn không hợp lệ")
    }

}  while(choice !== 0)