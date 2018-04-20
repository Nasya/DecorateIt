$(document).on('submit', 'form', function () {

    var UserName = $('input[Name=first_name]').val();
    var UserSN = $('input[Surname=second_name]').val();
    var UserLogin = $('input[Login=login]').val();
    var UserEm = $('input[Email=email]').val();
    var UserPass = $('input[Password=passw]').val();

    if (UserName.length > 0 || UserSN > 0 || UserLogin > 0 || UserEm > 0 || UserPass > 0) {
        SubmitForm(UserName, UserSN, UserLogin, UserEm, UserPass);         
    }
    else {
         alert("Not full information");
    }
 });

/*Ajax jQuery*/
function SubmitForm(name, surname, login, email, password) {
    $.ajax({
        method: "POST",
        url: "/Content/pages/registration.hmtl",
        data: { Name: name, Surname: surname, Login: login, Email: email, Password: password }
    })
   .done(function (msg) {
       alert("Good: " + msg);
   }).fail(function () {
       alert("Error!");
   });
}
