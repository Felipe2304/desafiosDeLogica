function gradingStudents(grades) {
  const newGrading = grades.map((note) => {
    const updatedNote = Math.ceil(note / 5) * 5;
    return updatedNote - note < 3 && note > 37 ? updatedNote : note;
  });

  return newGrading;
}

const result = gradingStudents([73, 67, 38, 33]);

console.log(result);
