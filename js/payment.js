$(document).ready(function() {
    // retrieve value from sessionStorage
    var amount = sessionStorage.getItem("totalCost");

    // set value in html element
    //$("#amt-value").html(amount);

    paypal.Buttons().render('#paypal-btn');
    $("#pay-btn").click(function() {
        // direct payment to paypal
    });
});

