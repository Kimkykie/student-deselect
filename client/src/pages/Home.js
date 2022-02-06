import { useEffect, useState } from "react";
import Students from "../components/Students";
import "../styles/home.css";

const Home = () => {
  const [students, setStudents] = useState(null);
  const [nationalities, setNationalities] = useState(null);
  const [nationalityFilter, setNationalityFilter] = useState(null);

  const filterStudents = () => {
    const filteredStudents = students.filter(
      (student) => student.nationality === nationalityFilter
    );

    return filteredStudents;
  };

  const handleFilterInput = (event) => {
    let value = event.target.value;
    setNationalityFilter(value);
  };

  useEffect(() => {
    fetch("/students/all")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.students);
        setNationalities(data.nationalities);
        setNationalityFilter(data.nationalities[0]);
      });
  }, []);

  return (
    <div className="student-container">
      {students && nationalities && (
        <>
          <select
            className="student-select"
            onChange={handleFilterInput}
            defaultValue={nationalities[0]}
            placeholder="Select a region"
          >
            {nationalities.map((nationality) => (
              <option value={nationality} key={nationality}>
                {nationality}
              </option>
            ))}
          </select>
          <Students students={filterStudents()} nationalities={nationalities} />
        </>
      )}
    </div>
  );
};

export default Home;
