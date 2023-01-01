import { useState, useEffect } from 'react';
import { GET } from '../../modules';
function TeacherList() {
    const [id, setId] = useState('');
    const [teachers, setTeacher] = useState([]);
    const [teacherFinding, setTeacherFinding] = useState([]);
    useEffect(() => {
        const handleFetchAllStudentInfo = async () => {
            let data = await GET.fetchTeacher();
            setTeacher(data);
            setTeacherFinding(data);
        };
        handleFetchAllStudentInfo();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === '') {
            setTeacherFinding(teachers);
            return;
        }
        setTeacherFinding((tokenArray) => []);
        teachers.forEach((teacher, index) => {
            if (teacher.id === id) {
                setTeacherFinding((teacherFinding) => [...teacherFinding, teacher]);
            }
        });
    };
    return (
        <>
            <form>
                <h2>Danh sách Giáo viên </h2>
                <div className="form-row align-items-end">
                    <div className="form-group mr-3">
                        <label htmlFor="inputEmail4">Mã giáo viên</label>
                        <input
                            type="text"
                            className=" form-control"
                            id="inputEmail4"
                            placeholder="Mã giáo viên"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                        onClick={handleSubmit}
                    >
                        Tra cứu
                    </button>
                </div>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Mã số</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Phụ trách môn</th>
                        <th scope="col">SDT</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherFinding.length > 0 &&
                        teacherFinding.map((teacher, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{teacher.id}</td>
                                <td>{teacher.name}</td>
                                <td>{teacher.gender}</td>
                                <td>{teacher.subject}</td>
                                <td>{teacher.phone}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
}

export default TeacherList;
