angular.module('starter', [ 'starter.controllers','starter.services','720kb.datepicker']).run(function($rootScope)
{
        let lang=localStorage.getItem("lang") == "AR" ? {
                SignUp:"تسجيل الدخول",
                Voter:"صوت لمرشحك ",
                nationalityID:"الرقم الوطني",
                password:"كلمة المرور" ,
                Name:"الإسم",
                Year:"السنه",
                city:"المدينة",
                AlreadyaMember:"مسجل مسبقا",
                LoginHere : "الدخول" ,
                birthOfDate:"تاريخ الميلاد" ,
                HOME:"الصفحة الرئيسية",
                HISTORY:"الأصوات",
                LOGOUT:"تسجيل الخروج",
                CandidateName:"اسم المرشح",
                CandidateCity :"مدينة المرشح",
                CandidateCampaign :"الشعار اللإنتخابي",
                Operations:"العمليات",
                VoterLogin:"الدخول",
                Login:"الدخول",
                NewUser:" مسجل جديد ؟",
                Vote:"تصويت",
                Language :"إنجليزي",
                thisfieldisrequired :"يجب ثعبئة الحقل",
                passwordisrequired :"*يجب إدخال كلمة المرور",
                Nationailtyidalreadyexist:"الرقم الوطني موجود "

        }
        
        :{
                SignUp:"Signup",
                Voter:"Voter",
                nationalityID:"nationalityID",
                password:"password" ,
                Name:"Name",
                Year:"Year",
                city:"City",
                AlreadyaMember:"Already a Member",
                LoginHere : "Login Here " ,
                birthOfDate:"BirthOfDate" ,
                HOME:"HOME",
                HISTORY:"HISTORY",
                LOGOUT:"LOGOUT",
                CandidateName:"Candidate Name",
                CandidateCity :"Candidate City",
                CandidateCampaign :"Candidate Campaign",
                Operations:"Operations",
                VoterLogin:"Voter Login",
                Login:"Login",
                NewUser:" New User",
                Vote:"Vote",
                Language :"Arabic",
                thisfieldisrequired :"this field is required",
                passwordisrequired :"*password is required",
                Nationailtyidalreadyexist:"Nationailty id already exist"
                
        }
$rootScope.lang=lang;
   const isLogin =  localStorage.getItem("voterId")
        // end of check if loged in )
        if(!localStorage.getItem("voterId"))
$rootScope.notLogin = true;
else
$rootScope.notLogin = false;
});