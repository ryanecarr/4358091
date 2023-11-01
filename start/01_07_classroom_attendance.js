// Write your code here

const getStudents = (classRoom) => {
  const { hasTeachingAssistant, classList } = classRoom;

  let teacher, assistant, students;

  if (hasTeachingAssistant) {
    [teacher, assistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }

  console.log({
    teacher,
    assistant: assistant ? assistant : "no teachers assistant",
    students,
  });
};

const classRoom = {
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
};

getStudents(classRoom);
