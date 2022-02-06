import React from "react";

const Students = ({ students }) => {
  return (
    <>
      {students.map((student) => (
        <div key={student.id} className="student-info">
          <span>
            {student.firstName} {student.lastName}
          </span>
          <span> ({student.age})</span>
        </div>
      ))}
    </>
  );
};

export default Students;
