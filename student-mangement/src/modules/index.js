//GET METHODS
//ham lay thong tin moi hoc sinh
const fetchUser = async (id) => {
    let info = await fetch(`http://localhost:55000/api/about/${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
            sid: localStorage.getItem('sid'),
        },
        method: 'GET',
    });
    if (info.status !== 200) {
        console.log('Data cua id ' + id + ' bi loi');
    }
    let data = await info.json();

    return data;
};

const fetchEachClassInfo = async (id, nid) => {
    let info = await fetch(`http://localhost:55000/api/class-list?nid=${nid}&id=${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
            sid: localStorage.getItem('sid'),
        },
        method: 'GET',
    });
    if (info.status !== 200) {
        console.log('Du lieu cua lop co id la ' + id + ' bi loi');
    } else if (info.status === 200) {
        console.log('co status lay info');
    }
    // console.log('testing');
    let data = await info.json();
    // console.log(data);
    return data;
};
const fetchClassList = async (nid) => {
    let info = await fetch(`http://localhost:55000/api/class-list?nid=${nid}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
            sid: localStorage.getItem('sid'),
        },
        method: 'GET',
    })
        .then((response) => response)
        .then((response) => {
            if (response.status !== 200) {
                alert('Khong lay data ve duoc tu nam va hoc ki');
                return null;
            }
            return response.json();
        })
        .catch((err) => alert('khong ket noi duoc'));

    console.log(`http://localhost:55000/api/class-list?nid=${nid}`);
    console.log(info);
    return info;
};
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
    if (data) {
        return data;
    } else {
        alert('Loi khong tai duoc danh sach giao vien');
        return [];
    }
};
const fetchRule = async (nid) => {
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
    console.log('rule', data);
    if (data.message) {
        console.log('khong ton tai');
        return null;
    } else {
        console.log('khong doi duoc');
        return data;
    }
};
const fetchGradeAPerson = async (id, nid) => {
    let res = await fetch(`http://localhost:55000/api/grade?id=${id}&nid=${nid}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
            sid: localStorage.getItem('sid'),
        },
        method: 'GET',
    });
    if (res.status !== 200) {
        return null;
    }
    let data = await res.json();
    return data;
};
const fetchGradeOneStudent = async (id, nid) => {
    let res = await fetch(`http://localhost:55000/api/grade?id=${id}&nid=${nid}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
            sid: localStorage.getItem('sid'),
        },
        method: 'GET',
    });
    if (res.status !== 200) {
        return null;
    }
    let data = await res.json();
    return data;
};
const fetchGradeAPersonASubject = async (id, nid, subject) => {
    let res = await fetch(`http://localhost:55000/api/grade?id=${id}&nid=${nid}&subject=${subject}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
            sid: localStorage.getItem('sid'),
        },
        method: 'GET',
    });
    if (res.status !== 200) {
        return null;
    }
    let data = await res.json();

    return data;
};
//-----------------------------------------------------------------
//POST METHODS
const logIn = async (id, password, role) => {
    let res = await fetch('http://localhost:55000/login', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
        },
        method: 'POST',
        body: JSON.stringify({ id: id, password: password, role: role }),
    });
    console.log('TK dang nhap', id, password, role);
    let data = await res.json();
    if (data !== undefined) {
        console.log(data);
        return data;
    } else {
        alert('Tài khoản hoặc mật khẩu không đúng, vui lòng thử lại');
        return null;
    }
};
const postRule = async (nid, _1, _2, _3, _4, _5, _6, _7) => {
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
        return false;
    } else {
        alert('failed to post', data);
        return true;
    }
};
const postGrade = async (nid, id, grade) => {
    let res = await fetch(`http://localhost:55000/api/input-grade`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
            sid: localStorage.getItem('sid'),
        },
        method: 'POST',
        body: JSON.stringify({
            nid: nid,
            point: {
                id: id,
                result: {
                    mieng: grade.mieng,
                    _15: grade._15,
                    _45: grade._45,
                    _gk: grade._gk,
                    _ck: grade._ck,
                },
            },
        }),
    });

    let data = await res.json();
    return data;
};
const changePassword = async (currentPassword, newPassword) => {
    let res = await fetch(`http://localhost:55000/api/change-password`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
            sid: localStorage.getItem('sid'),
        },
        method: 'POST',
        body: JSON.stringify({
            newPassword: newPassword,
            currentPassword: currentPassword,
        }),
    });

    let data = await res.json();
    return data;
};
//----------------------------------------------------------------
//DELETE METHODS
const deleteAccount = async (id) => {
    let info2 = await fetch(`http://localhost:55000/api/delete/${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Cache: 'no-cache',
            sid: localStorage.getItem('sid'),
        },
        method: 'DELETE',
    });
    let data = await info2.json();
    return data;
};

//------------------------------
module.exports = {
    GET: {
        fetchUser,
        fetchEachClassInfo,
        fetchClassList,
        fetchTeacher,
        fetchRule,
        fetchGradeAPerson,
        fetchGradeOneStudent,
        fetchGradeAPersonASubject,
    },
    POST: {
        logIn,
        postRule,
        postGrade,
        changePassword,
    },
    DELETE: {
        deleteAccount,
    },
};
