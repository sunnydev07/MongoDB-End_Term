use college;

// 1. Insert eight employees into the "employees" collection
db.employees.insertMany([
  { empId: 1, name: "Aarav Nair", dept: "IT", city: "Chennai", salary: 85000 },
  { empId: 2, name: "Bhavna Rao", dept: "Finance", city: "Bengaluru", salary: 72000 },
  { empId: 3, name: "Chetan Kulkarni", dept: "HR", city: "Chennai", salary: 48000 },
  { empId: 4, name: "Divya Menon", dept: "IT", city: "Mumbai", salary: 60000 },
  { empId: 5, name: "Eshan Kapoor", dept: "Sales", city: "Delhi", salary: 55000 },
  { empId: 6, name: "Farah Khan", dept: "Finance", city: "Chennai", salary: 52000 },
  { empId: 7, name: "Gaurav Joshi", dept: "Operations", city: "Bengaluru", salary: 38000 },
  { empId: 8, name: "Harini Iyer", dept: "HR", city: "Hyderabad", salary: 76000 }
]);

// 2. Find employees who earn more than 6000 using $gt
db.employees.find({ salary: { $gt: 6000 } });

// 3. Find employees who earn between 45000 and 60000 (both inclusive) using $gte and $lte
db.employees.find({ salary: { $gte: 45000, $lte: 60000 } });

// 4. Find employees of the IT or Finance department using $in
db.employees.find({ dept: { $in: ["IT", "Finance"] } });

// 5a. Find Chennai employees earning more than 50000 using $and
db.employees.find({
  $and: [
    { city: "Chennai" },
    { salary: { $gt: 50000 } }
  ]
});

// 5b. Find employees who are in HR or earn more than 70000 using $or
db.employees.find({
  $or: [
    { dept: "HR" },
    { salary: { $gt: 70000 } }
  ]
});

// 6. Find employees who do not live in Chennai or Bengaluru using $nin
db.employees.find({ city: { $nin: ["Chennai", "Bengaluru"] } });

// 7. Find employees whose name starts with A, B, or C using $regex
db.employees.find({ name: { $regex: /^[ABC]/ } });

// 8. Show only names and salaries, highest salary first, skip first 2, return next 3
db.employees.find(
  {},
  { _id: 0, name: 1, salary: 1 }
).sort({ salary: -1 }).skip(2).limit(3);