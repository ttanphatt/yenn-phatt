$(document).ready(function(){
    $('#btnAdd').click(function(){
        var phone = $("#phoneId").val()
        var option = $("#optionId").val()

        $("div.order-bot").prepend(`
        <div class="order-item active ">
            <div class="c5"><img src="img/ok-32.png"/></div>
            <div class="c20">${phone}</div>
            <div class="c65">${option}</div>
            <div class="c5"><input  type="button" value="Xóa"/></div>
        </div>
        `)
    })
    
}
)