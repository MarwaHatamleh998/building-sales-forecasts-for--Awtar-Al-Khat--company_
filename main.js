// الهدف السنوي للشركة
const companyGoal = 480000;

// عدد الموظفين
const salesTeam = 4;

// بيانات الصفقة
const itemsPerDeal = 200;
const pricePerItem = 20;

// حساب قيمة الصفقة الواحدة
const dealValue = itemsPerDeal * pricePerItem;
console.log("قيمة الصفقة:", dealValue);

// عدد الصفقات شهريًا لكل موظف
const dealsPerMonth = 2;

// المبيعات الشهرية لموظف واحد
const monthlySalesPerRep = dealsPerMonth * dealValue;
console.log("المبيعات الشهرية لموظف:", monthlySalesPerRep);

// المبيعات السنوية لموظف واحد
const yearlySalesPerRep = monthlySalesPerRep * 12;
console.log("المبيعات السنوية لموظف:", yearlySalesPerRep);

// المبيعات السنوية للفريق بالكامل
const teamYearlySales = yearlySalesPerRep * salesTeam;
console.log("المبيعات السنوية للفريق:", teamYearlySales);

// حساب الفجوة مع الهدف
const gap = companyGoal - teamYearlySales;
console.log("الفجوة مع الهدف:", gap);

// تقييم الأداء
if (teamYearlySales >= companyGoal) {
  console.log("الفريق قادر على تحقيق الهدف 🎯");
} else {
  console.log("الفريق غير قادر على تحقيق الهدف ❌");
}