import { useState, useEffect } from 'react';
import { GET, POST } from '../../modules';

function Rule() {
    const [onChanging, setOnChanging] = useState(false);

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
        handleFetchRule();
    }, []);
    useEffect(() => {
        handleFetchRule();
    }, [year]);

    const handleFetchRule = async () => {
        let nid = handleNId(year);

        let data = await GET.fetchRule(nid);
        if (!data) {
            setOnChanging(true);
        } else {
            setRule(data);
            setOnChanging(false);
        }
    };

    const handlePostRule = async () => {
        let nid = handleNId(year);
        let isSuccess = await POST.postRule(nid, _1, _2, _3, _4, _5, _6, _7);
        if (!isSuccess) {
            // fetchRule();
            setRule({
                nid: nid,
                numberOfClass: { _10: _1, _11: _2, _12: _3 },
                age: { min: _4, max: _5 },
                numberOfStudent: { min: _6, max: _7 },
            });
            setOnChanging(false);
            set1();
            set2();
            set3();
            set4();
            set5();
            set6();
            set7();
            return;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // let data = await fetchRule();
        // return data;
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
                    </select>
                </div>
            </form>
            {/* GIAO DIEN XEM */}

            {!onChanging && rule && (
                <div>
                    <h5>Số Lớp trong trường X phải thỏa mãn: </h5>
                    {/* <br/>  */}
                    <h6>Lop 10: {' ' + rule.numberOfClass._10}</h6>
                    <h6>Lop 11: {' ' + rule.numberOfClass._11}</h6>
                    <h6>Lop 12: {' ' + rule.numberOfClass._12}</h6>
                    <br />
                    <h5>Số Học sinh có trong 1 lớp học:</h5>
                    <h6>
                        Từ {' ' + rule.numberOfStudent.min} đến {' ' + rule.numberOfStudent.max}
                    </h6>
                    <br />
                    <h5>
                        Tuổi quy định của mỗi học sinh: <br />
                    </h5>
                    <h6>Nhỏ nhất: {' ' + rule.age.min}</h6>
                    <h6>Cao nhất: {' ' + rule.age.max}</h6>
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
                    <button onClick={handlePostRule}>Luu</button>
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
