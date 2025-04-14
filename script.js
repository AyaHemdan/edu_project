//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues = 0;
var lang;
var score = 0;

var الاولquestions = [

    {
        question: "يعد ..بمثابة استراتيجية مخصصة ذات قيمة خاصة في البيئات التى تضم متعلمين متنوعين",
        choices: ["التعلم النقال", "التعلم التكيفي", "التعلم التشاركي", "التعلم المدمج"],
        answer: 2

    },

    {
        question: "هي بيئة يمكن من خلالها ان يدير جميع العمليات التعلم عن طريق الاجهزة المحمولة واللوحية و المتنقلة",
        choices: ["التعلم النقال", "التعلم المدمج", "التعلم التكيفي", "التعلم الالكترونى"],
        answer: 3

    },
    {
        question: "تعتبر انظمة التعلم التكيفية اليوم عادة على ...عناصر",
        choices: ["4", "3", "7", "9"],
        answer: 1

    },
    {
        question: "موديول.... تتمثل وظيفته في تحديد كل ما يمكن ان يتعلمه المتعلمون وساعد في اتخاذ القرارات التدرسية وفقا لاحتياجاتهك",
        choices: ["موديول المتعلم", "موديول الخبير", "موديول المعلم", "موديول الواجهة"],
        answer: 2

    },
    {/*5*/
        question: "موديول... يهتم بادارة المعلومات المتعلقة بالمتعلم والتى تتضمن المعرفة السابقة والاستعدادات والسمات الشخصية وما الى ذلك",
        choices: ["موديول الخبير", "موديول المتعلم", "موديول المعلم", "موديول الواجهة"],
        answer: 2

    },
    {
        question: "موديول ... كيفية عرض تجربة التعلم للمتعلم وتتغير بناء على موديول المتعلم واهداف التعلم",
        choices: ["موديول المتعلم", "موديول الخبير", "موديول المعلم", "موديول الواجهة"],
        answer: 4

    },
    {
        question: "موديول... يحدد كل المهارات التى يجب التركيز عليها وما على المتعلم القيام به",
        choices: ["موديول المتعلم", "موديول الخبير", "موديول المعلم", "موديول الواجهة"],
        answer: 3

    },
    {
        question: "يتكون النظام التكيفي من .... اجزاء منفصلة",
        choices: ["3", "4", "2", "7"],
        answer: 1

    },
    {
        question: "نموذج ... يجب ان يحتوى النظام على شبكة او مخطط تدفق للكفاءات والموضوعات",
        choices: ["التعليمي", "المعلم", "المتعلم", "المحتوى"],
        answer: 4

    },
    {/*10*/
        question: "نموذج .. يجب ان يكون النظام قادرا على تمثيل معرفة وقدرات كل متعلم",
        choices: ["المتعلم", "المحتوى", "التعليمي", "كا ما سبق خطأ"],
        answer: 1

    }

];

var  الثانيquestions = [

    {
        question: "بيئات تعمل علي استخدام الاجهزة الاسلكية الصغيرة و المحمولة يدويا",
        choices: ["التعلم النقال", "السنجريبيرهه", "المدمج", "الالكتروني"],
        answer: 1

    },
    {
        question: "من خصائص بيئة التعلم .. التنقل ويقصد به امكانية استقبال التعلم بمصادره المختلفة اى مكان دون التقيد بجدران بيئة الصف التقليدية",
        choices: ["المدمج", "النفال", "الالكتروني", "المصغر"],
        answer: 2

    },
    {
        question: "من خصائص بيئة ... تعدد الاستخدامات حيث يمكن استخدام الاجهزة المحمولة في اغراض كثيرة",
        choices: ["المصغر", "الالكترونى", "المدمج", "التعلم النقال"],
        answer: 4

    },
    {/*4*/
        question: "بيئة تعمل على استخدام الاجهزة اللاسلكية الصغيرة والمحمولة يدويا من اجل تحقيق المرونة والتفاعل في التعليم",
        choices: ["الالكترونى", "التعلم النقال ", "المدمج", "علاوي حبيب قلبي "],
        answer: 2

    },
    {
        question: "تتكون بيئات التعلم النقال من ",
        choices: ["خدمات تطبيقية", "خدمات توصيل", "جميع ما سبق", "ولا واحد"],
        answer: 3

    },
    {/*6*/
        question: "هي خدمات المعلومات والمكتبةوالبطاقات وترجمة اللغات",
        choices: ["خدمات توصيل", "الخدمات التطبيقية", "خدمات الافراد", "جميغ ما سبق"],
        answer: 2

    },
    {
        question: "التكامل بين كل من المحتوى وتطبيقاته",
        choices: ["خدمات التوصيل", "السنجبربرهيه", "التكامل من خلال خدمات الويب", "ولا واحد ي حب"],
        answer: 3

    },
    {/*8*/
        question: "يستخدم لتوصيل المحتوى التعليمي عبر الانترنت باستخدام الاجهزة اللاسلكية",
        choices: ["خدمات التوصيل", "السنجبربرهيه", "التكامل من خلال خدمات الويب", "ولا واحد ي حب"],
        answer: 1

    },
    {
        question: "وهى خدمات المعلمين والمتعلمين والاداريين والتفاعل بينها",
        choices: ["خدمات التوصيل", "خدمات الافراد", "خدمات تطبيقية", "كل ما سبق"],
        answer: 2

    },
    {
        question: "من خصائص التعلن النقال... وتعني امكانية استقبال التعلم بمصادرة المختلفة فى اى مكان ",
        choices: ["التنقل", "التكامل", "التكيف", "اجرى وخد  التكيف"],
        answer: 1

    }

];
var الثالثquestions = [

    {
        question: "يئات تعمل علي استخدام الاجهزة الاسلكية الصغيرة و المحمولة يدويا",
        choices: ["المدمج", "الالكترونى", "المصغر", " ينفع جميع ما سبق"],
        answer: 3

    },
    {
        question: " من الممكن فهم ..... في معناه الواسع بوصفه مجازا يشير الى الجوانب الجزئية لمجموعة من نماذج التعليم ومفاهيمه",
        choices: ["المدمج", "التعلم المصغر", "الالكترونى", "التقليدي"],
        answer: 2

    },
    {
        question: "بيئة تعلم تقوم علي اسلوب تربوي يتمحور حول الطالب يتكون من وحدات تعليمية صغيرة تساعد المتعلم في تحقيق هدف تعليمي واحد ",
        choices: ["التعلم المصغر", "التعلم التشاركي"],
        answer: 1

    },
    {
        question: "تساعد بيئة التعلم المصغر المتعلم في تحقيق هدف تعليمي واحد علي الارحج في وقت قصير يتراوح",
        choices: ["5-8", "3-11", "3-7", "1-8"],
        answer: 3

    },
    {
        question: "من خصائص بيئة التعلم ... مركز ومصحوب بسؤال او نشاط تفاعلي مصغر",
        choices: ["اى بقي", "المصغر"],
        answer: 2

    },
    {
        question: "في بيئة التعلم... تكون كل وحدة مكتفية بذاتها",
        choices: ["النقال", "المصغر"],
        answer: 2

    },
    {
        question: "فقط في بيئات التعلم المصغر عبارة عن طرح سؤال والاجابة علية بشكل مختصر و دقيق ومركز",
        choices: ["الالغاز", "الاختيارت الكبيرة", "الاختبارات القصيرة", "المحاكاه"],
        answer: 3

    },
    {
        question: "في بيئى التعلم المصغر يتم عرض المحتوى مم..الى",
        choices: ["2-3", "3-5", "مرة", "لا شى مما سبق"],
        answer: 1

    },
    {
        question: " تكون الجلسة في بيئة التعلم المصغر من ..الى",
        choices: ["7-15 دقيقة", "1-10 دقائق"],
        answer: 2

    },
    {
        question: "فقط في بيئات التعلم المصغر عبارة عن طرح سؤال والاجابة علية بشكل مختصر و دقيق ومركز",
        choices: ["الالغاز", "الاختيارت الكبيرة", "الاختبارات القصيرة", "المحاكاه"],
        answer: 3

    }

];
var  الرابعquestions = [

    {
        question: "التعلم الموجود حولنا في كل مكان وزمان ويمكب الوصول اليه بسهولة باستخدام اجهزة التعلم المتنقل",
        choices: ["التعلم المنتشر", "النقال", "المصغر", "اللالكترونى"],
        answer: 1

    },
    {
        question: "بيئة التعلم المنتشر وسط يستطيع الطلاب ان يصبحوا مستغرقين تماما وكليا في عملية التعلم",
        choices: ["النقال", "المصغر", "اللالكترونى", "التعلم المنتشر"],
        answer: 4

    },
    {
        question: "هي المحيط او الموضع لتعلم المنتشر والذى يحدث حول الطالب ولكنه ربما يكون غير واع بعملية التعلم",
        choices: ["التعلم المنتشر", "النقال", "المصغر", "اللالكترونى"],
        answer: 1

    },
    {
        question: "طبقة موجمودة في بيئة التعلم المنتشر تهتم بمعايير التشغيل ولغات البرمجة التى تستخدم في انتاج بيئات",
        choices: ["طبقة الخدمة", "طبقة البيانات", " الطبقة المادية", "جميع ما سبق"],
        answer: 2

    },
    {
        question: "من خصائص التعلم المنتشر...في الحصول على المعلومات وقتما و اينما يشاء",
        choices: ["التكاملية", "سهولة التنقل", "الفورية", "المرونة"],
        answer: 3

    },
    {
        question: "يقصد به الاحتفاظ بسجلات نشاط الطلاب واعمالهم فلا يتم فقدانها",
        choices: ["الثبات", "التكامل", "الاتاحة", "الفورية"],
        answer: 1

    },
    {
        question: "يتمكن الطالب من نقل التعلم بعيدا فى اى مكان وزمان دون قيود",
        choices: ["الانتشار", "التكامل", "التنقل", "الاتاحة"],
        answer: 3

    },
    {
        question: "من خصائص بيئة التعلم ...نظرا لخفة وزن الاجهزة وصغر حجمها",
        choices: ["سهولة التنقل", "التنقل", "الفورية", "كلهم"],
        answer: 1

    },
    {
        question: "بيئة التعلم المنتشر فهي بيئة مرنة تتواجد في كل مكان معتمده على مجموعه متنوعه من الاجهزة المحموله والبرامج",
        choices: ["الفورية", "التنقل", "الانتشار", "التكيف"],
        answer: 3

    },
    {
        question: "وهو ما بين التعلم الرسمي والغير رسمي ودعم مبدأ التعلم مدى الحياة",
        choices: ["الفورية", "التنقل", "التكامل", "التكيف"],
        answer: 3

    }

];
var الخامسquestions = [

    {
        question: "المحيط الذي يتم فيه توظيف كافة الامكانات والوسائط التكنولوجية المتاحة من خلال الجمع بين اكثر من اسلوب و اداه التعلم سواء كانت الكترونية او تقليدية وجها لوجه لتقديم اسلوب فعال من التعلم",
        choices: ["التعلم المدمج", "التقليدي", "النقال", "المصغر"],
        answer: 1

    },
    {
        question: "بيئة فيها بيتم التعلم الالكترونى والتعلم الالكترونى",
        choices: ["التعلم الالكترونى", "التعلم المدمج", "المدمج", "النقال"],
        answer: 2

    },
    {
        question: "في بيئة التعلم المدمج بيتم التعلم فيه من خلال",
        choices: ["فصول تقليدية", "فصول افتراضية", "كلاهما", ],
        answer: 3

    },
    {
        question: "يركز ... الفعال علي كيفية دمج المصادر التعلمية",
        choices: ["التعلم الالكترونى", "التعلم النقال", "التعلم المدمج", "التعلم المفتوح"],
        answer: 3

    },
    {
        question: "تتضمن بيئة التعلم المدمج ...انماط من التعلم",
        choices: ["7", "2", "3", "8"],
        answer: 3

    },
    {
        question: "امداد الطلاب بالمقررات الاثرائية بما يناسب احتياجاتهم",
        choices: ["اهداف التعلم المدمج", "خصائص التعلم المدمج", "مميزات التعلم المدمج", "جميع ما سبق"],
        answer: 3

    },
    {
        question: " تحقيق المرونة في استخدام الدجول الدراسي",
        choices: ["اهداف التعلم المدمج", "مميزات التعلم المدمج", "خصائص التعلم المدمج", "جميع ما سبق"],
        answer: 2

    },
    {
        question: "تقديم الفصول غير رسمية ويطلق عليها الفصول الافتراضية",
        choices: ["اهداف التعلم المدمج", "خصائص التعلم المدمج", "مميزات التعلم المدمج", "جميع ما سبق"],
        answer: 3

    },
    {
        question: "تقليل نفقات التعلم مقارنة بالتعلم الالكترونى",
        choices: ["اهداف التعلم المدمج", "خصائص التعلم المدمج", "مميزات التعلم المدمج", "جميع ما سبق"],
        answer: 3

    },
    {
        question: "مراعاه الفروق الفردية بين المتعلمين",
        choices: ["اهداف التعلم المدمج", "خصائص التعلم المدمج", "مميزات التعلم المدمج", "جميع ما سبق"],
        answer: 3

    }

];





//alert(questions.length);
document.getElementById("score").textContent = "Score : " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";








document.querySelector(".choose-lang").addEventListener("click", function () {

    lang = document.getElementById("language").value + "questions";
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;

    //    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/*For loop Closed*/

    //    window.location.href="#score";

});





document.querySelector(".submit-answer").addEventListener("click", function () {
    //     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
    //     alert(document.querySelector('input[name="options"]:checked').value);

    if (document.querySelector('input[name="options"]:checked').value === window[lang][countQues].choices[window[lang][countQues].answer - 1]) {

        score += 10;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";

    } else {

        score -= 5;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    };

    if (countQues < window[lang].length - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    };/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click", function () {

    document.querySelector(".final-result").style.display = "block";

    document.querySelector(".solved-ques-no").innerHTML = "You Solved " + (countQues + 1) + " questions of " + document.getElementById("language").value;

    var correct = document.getElementById("ques-view").getElementsByClassName("correct").length;

    document.querySelector(".right-wrong").innerHTML = correct + " were Right and " + ((countQues + 1) - correct) + " were Wrong";

    document.getElementById("display-final-score").innerHTML = "Your Final Score is: " + score;

    if (correct / (countQues + 1) > 0.8) {
        document.querySelector(".remark").innerHTML = "Remark: OutStanding ! :)";
    } else if (correct / (countQues + 1) > 0.6) {
        document.querySelector(".remark").innerHTML = "Remark: Good, Keep Improving.";

    } else if (correct / (countQues + 1)) {
        document.querySelector(".remark").innerHTML = "Remark: Satisfactory, Learn More.";
    } else {
        document.querySelector(".remark").innerHTML = "Remark: Unsatisfactory, Try Again.";
    }

    //    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();

});

document.getElementById("about").addEventListener("click", function () {
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
