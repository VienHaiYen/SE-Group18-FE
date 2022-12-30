//đừng làm nữa
import { useState, useEffect } from 'react';
function TeacherList() {
    const [teachers, setTeacher] = useState([]);
    // useEffect(() => {
    //     fetchTeacher();
    // }, []);
    const fetchTeacher = async () => {
        let res = await fetch('http://localhost:55000/api/teacher-list', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'GET',
        });

        let data = await res.json();
        if (data.status !== 200) {
            console.log(data);
            return data;
        } else {
            alert(data.message);
            setTeacher(data);
            return null;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchTeacher();
    };
    return (
        <>
            <form>
                <h2>Danh sách Giáo viên </h2>
                <div className="form-row align-items-end">
                    <div className="form-group mr-3">
                        <label htmlFor="inputEmail4">Mã giáo viên</label>
                        <input type="text" className=" form-control" id="inputEmail4" placeholder="Mã giáo viên" />
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
                    {teachers.map((teacher, index) => (
                        <tr key={index}>
                            <th scope="row">{index}</th>
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
