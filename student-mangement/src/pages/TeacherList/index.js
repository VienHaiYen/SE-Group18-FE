//đừng làm nữa
import { useState, useEffect } from 'react';
function TeacherList() {
    const [teachers, setTeacher] = useState([]);
    useEffect(() => {
        fetchTeacher();
    }, []);
    const fetchTeacher = async () => {
        const res = await fetch(`http://localhost:5000/info`);
        let data = await res.json();
        data = data.reduce(
            (accumulator, current) => (current.role === 'teacher' ? [...accumulator, current] : [...accumulator]),
            [],
        );
        setTeacher(data);
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
                    <div className="form-group mr-3">
                        <label htmlFor="inputState">Năm học</label>
                        <select id="inputState" className="form-control">
                            <option defaultValue disabled>
                                --Năm học--
                            </option>
                            <option value={2223}>2022-2023</option>
                            <option value={2122}>2021-2022</option>
                            <option value={2021}>2020-2021</option>
                            <option value={1920}>2019-2020</option>
                        </select>
                    </div>
                    <div className="form-group mr-3">
                        <label htmlFor="inputState">Học kì</label>
                        <select id="inputState" className="form-control">
                            <option defaultValue disabled>
                                --Học kì--
                            </option>
                            <option>Học kì 1</option>
                            <option>Học kì 2</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
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
