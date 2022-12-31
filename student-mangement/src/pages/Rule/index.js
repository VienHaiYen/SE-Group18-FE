import { useState, useEffect } from 'react';
function Rule() {
    const [onChanging, setOnChanging] = useState(false);
    let numclassName = 10;
    let numStuInclassName = [25, 38];
    let age = [10, 15];

    const [year, setYear] = useState(2223);
    const [rule, setRule] = useState();

    const [_1, set1] = useState();
    const [_2, set2] = useState();
    const [_3, set3] = useState();
    const [_4, set4] = useState();
    const [_5, set5] = useState();
    const [_6, set6] = useState();
    const [_7, set7] = useState();
    const handleNId = (year) => {
        let nid = year * 10 + 1;
        return nid.toString();
    };
    useEffect(() => {
        fetchRule();
    }, []);
    useEffect(() => {
        fetchRule();
    }, [year]);
    const fetchRule = async () => {
        let nid = handleNId(year);
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
        if (data.message) {
            // alert('khong ton tai');
            console.log('msg:', data.message);
            setOnChanging(true);
            return null;
        } else {
            // alert('khong doi duoc');
            console.log('msg:', data.message);
            setRule(data);
            setOnChanging(false);
            return data;
        }
    };
    const postRule = async () => {
        let nid = handleNId(year);
        let res = await fetch(`http://localhost:55000/api/rule`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                sid: localStorage.getItem('sid'),
            },
            method: 'POST',
            body: JSON.stringify({
                nid: nid,
                numberOfStudent: {
                    min: _1,
                    max: _2,
                },
                numberOfClass: {
                    _10: _3,
                    _11: _4,
                    _12: _5,
                },
                age: {
                    min: _6,
                    max: _7,
                },
            }),
        });

        let data = await res.json();
        if (data.message) {
            alert('msg:', data.message);
            setOnChanging(false);
            set1();
            set2();
            set3();
            set4();
            set5();
            set6();
            set7();
        } else {
            alert('msg:', data);
            // setOnChanging(false);
            // return data;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = await fetchRule();
        // setOnChanging(!onChanging);
        // if (!data.message) {
        //     alert('khong doi duoc');
        // }
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
            </form>
            {/* GIAO DIEN XEM */}

            {!onChanging && (
                <div>
                    <p>Số Lớp trong trường X phải thỏa mãn: {numclassName}</p>
                    <p>
                        Số Học sinh có trong 1 lớp học: {numStuInclassName[0]} + '-' + {numStuInclassName[1]}
                    </p>
                    <p>Tuổi quy định của mỗi học sinh: {age[0] + '-' + age[1]}</p>
                </div>
            )}

            {/* GIAO DIEN CHINH SUA */}
            {onChanging && (
                <div>
                    <p>Số Lớp trong trường X phải thỏa mãn: </p>
                    <input
                        type="text"
                        className="form-control ml-2"
                        style={{ maxWidth: '100px', display: 'inline' }}
                        value={_1}
                        onChange={(e) => set1(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control ml-2"
                        style={{ maxWidth: '100px', display: 'inline' }}
                        value={_2}
                        onChange={(e) => set2(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control ml-2"
                        style={{ maxWidth: '100px', display: 'inline' }}
                        value={_3}
                        onChange={(e) => set3(e.target.value)}
                    />
                    <p>Số Học sinh có trong 1 lớp học: </p>
                    <input
                        type="text"
                        className="form-control ml-2"
                        style={{ maxWidth: '100px', display: 'inline' }}
                        value={_4}
                        onChange={(e) => set4(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control ml-2"
                        style={{ maxWidth: '100px', display: 'inline' }}
                        value={_5}
                        onChange={(e) => set5(e.target.value)}
                    />
                    <p>Tuổi quy định của mỗi học sinh: </p>
                    <input
                        type="text"
                        className="form-control ml-2"
                        style={{ maxWidth: '100px', display: 'inline' }}
                        value={_6}
                        onChange={(e) => set6(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control ml-2"
                        style={{ maxWidth: '100px', display: 'inline' }}
                        value={_7}
                        onChange={(e) => set7(e.target.value)}
                    />
                    <button onClick={postRule}>Luu</button>
                </div>
            )}
            <button
                type="submit"
                className="btn btn-secondary"
                style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                onClick={handleSubmit}
            >
                {onChanging ? 'Lưu thay đổi' : 'Thay đổi'}
            </button>
            {/* </form> */}
        </>
    );
}

export default Rule;
