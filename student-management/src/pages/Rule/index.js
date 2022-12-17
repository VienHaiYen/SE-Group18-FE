import { useState } from 'react';
function Rule() {
    const [onChanging, setOnChanging] = useState(true);
    let numclassName = 10;
    let numStuInclassName = [25, 38];
    let age = [10, 15];
    return (
        <>
            <h2>Quy định</h2>
            {/* <form> */}
            <div className="form-group mr-3">
                <label htmlFor="inputState">Năm học</label>
                <select id="inputState" className="form-control" style={{ width: '200px' }}>
                    <option defaultValue disabled>
                        --Năm học--
                    </option>
                    <option>2019-2020</option>
                    <option>2020-2021</option>
                    <option>20121-2022</option>
                    <option>20122-2023</option>
                </select>
            </div>
            <div>
                <p>
                    Số Lớp trong trường X phải thỏa mãn:{' '}
                    {(onChanging && (
                        <input
                            type="text"
                            className="form-control ml-2"
                            style={{ maxWidth: '100px', display: 'inline' }}
                        />
                    )) ||
                        numclassName}
                </p>
                <p>
                    Số Học sinh có trong 1 lớp học:{' '}
                    {(onChanging && (
                        <input
                            type="text"
                            className="form-control ml-2"
                            style={{ maxWidth: '100px', display: 'inline' }}
                        />
                    )) ||
                        numStuInclassName[0] + '-' + numStuInclassName[1]}
                </p>
                <p>
                    Tuổi quy định của mỗi học sinh:{' '}
                    {(onChanging && (
                        <input
                            type="text"
                            className="form-control ml-2"
                            style={{ maxWidth: '100px', display: 'inline' }}
                        />
                    )) ||
                        age[0] + '-' + age[1]}
                </p>
            </div>
            <button
                type="submit"
                className="btn btn-secondary"
                style={{ height: '40px', marginLeft: '20px', marginBottom: '1rem' }}
                onClick={() => setOnChanging(!onChanging)}
            >
                {onChanging ? 'Lưu thay đổi' : 'Thay đổi'}
            </button>
            {/* </form> */}
        </>
    );
}

export default Rule;
