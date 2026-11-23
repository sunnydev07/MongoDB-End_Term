use college;

// 1. Insert one student using insertOne()
db.students.insertOne({
  rollNo: 101,
  name: "Aarav Sharma",
  dept: "CSE",
  marks: 82
});

// 2. Insert four more students in a single command using insertMany()
db.students.insertMany([
  { rollNo: 102, name: "Diya Verma", dept: "ECE", marks: 76 },
  { rollNo: 103, name: "Rohan Gupta", dept: "CSE", marks: 54 },
  { rollNo: 104, name: "Ananya Singh", dept: "ME", marks: 71 },
  { rollNo: 105, name: "Kabir Mehta", dept: "CSE", marks: 88 }
]);

// 3. Display all students, then display only CSE department students
db.students.find();
db.students.find({ dept: "CSE" });

// 4. Correct the marks of roll number 103 to 68
db.students.updateOne(
  { rollNo: 103 },
  { $set: { marks: 68 } }
);

// 5. Add a semester field with value 3 to every CSE student
db.students.updateMany(
  { dept: "CSE" },
  { $set: { semester: 3 } }
);

// 6. Delete the record of roll number 104
db.students.deleteOne({ rollNo: 104 });

// 7. Display the total number of students that remain
db.students.countDocuments();