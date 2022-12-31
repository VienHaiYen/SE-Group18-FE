import { useState, useEffect } from 'react';
function Rule() {
    const [onChanging, setOnChanging] = useState(false);
    let numStuInclassName = [25, 38];

    const [year, setYear] = useState(2223);
    const [term, setTerm] = useState(1);
    const [rule, setRule] = useState();
    const handleNId = (year, term) => {
        let nid = year * 10 + term;
        return nid.toString();
    };
    useEffect(() => {
        fetchRule();
    }, []);
    const fetchRule = async () => {
        let nid = handleNId(year, term);
        let res = await fetch(`http://localhost:55000/api/rule?nid=${nid}`, {
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
            setRule(data);
            return data;
        } else {
            alert(data.message);
            return null;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchRule();
        setOnChanging(!onChanging);
    };

    return (
        <>
            <h2>Quy định</h2>
            <form className="d-flex">
                <div className="form-group mr-3">
                    <label htmlFor="yearID">Năm học</label>
                    <select id="yearID" className="form-control" onChange={(e) => setYear(e.target.value)}>
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
                    <label htmlFor="termID">Học kì</label>
                    <select id="termID" className="form-control" onChange={(e) => setTerm(e.target.value)}>
                        <option defaultValue disabled>
                            --Học kì--
                        </option>
                        <option value={1}>Học kì 1</option>
                        <option value={2}>Học kì 2</option>
                    </select>
                </div>
            </form>
            {rule && (
                <div style={{ fontSize: '1.3rem' }}>
                    <div>
                        Số Lớp trong trường X phải thỏa mãn:
                        <br />
                        <label style={{ fontWeight: '700', marginRight: '10px', marginLeft: '20px' }}>Lớp 10: </label>
                        {(onChanging && (
                            <>
                                <input
                                    type="text"
                                    className="form-control ml-2"
                                    style={{ maxWidth: '100px', display: 'inline' }}
                                />
                            </>
                        )) ||
                            rule.numberOfClass._10}
                        <br />
                        <label style={{ fontWeight: '700', marginRight: '10px', marginLeft: '20px' }}>Lớp 11: </label>
                        {(onChanging && (
                            <>
                                <input
                                    type="text"
                                    className="form-control ml-2"
                                    style={{ maxWidth: '100px', display: 'inline' }}
                                />
                            </>
                        )) ||
                            rule.numberOfClass._11}
                        <br />
                        <label style={{ fontWeight: '700', marginRight: '10px', marginLeft: '20px' }}>Lớp 12: </label>
                        {(onChanging && (
                            <>
                                <input
                                    type="text"
                                    className="form-control ml-2"
                                    style={{ maxWidth: '100px', display: 'inline' }}
                                />
                            </>
                        )) ||
                            rule.numberOfClass._12}
                        <br />
                    </div>
                    <div>
                        Số Học sinh có trong 1 lớp học:{' '}
                        {(onChanging && (
                            <input
                                type="text"
                                className="form-control ml-2"
                                style={{ maxWidth: '100px', display: 'inline' }}
                            />
                        )) ||
                            rule.numberOfStudent['min'] + ' - ' + rule.numberOfStudent['max']}
                    </div>
                    <div>
                        Tuổi quy định của mỗi học sinh:{' '}
                        {(onChanging && (
                            <input
                                type="text"
                                className="form-control ml-2"
                                style={{ maxWidth: '100px', display: 'inline' }}
                            />
                        )) ||
                            rule.age['min'] + ' - ' + rule.age['max']}
                    </div>
                </div>
            )}
            <button
                type="submit"
                className="btn btn-secondary"
                style={{ height: '40px', margin: '1rem' }}
                onClick={handleSubmit}
            >
                {onChanging ? 'Lưu thay đổi' : 'Thay đổi'}
            </button>
            {/* </form> */}
        </>
    );
}

export default Rule;
