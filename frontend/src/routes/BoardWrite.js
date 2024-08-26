import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const BoardWrite = () => {
    const navigate = useNavigate();
    const [board,setBoard] = useState({
        title: "",
        createdBy: "",
        contents: "",
    });
    const {title, createdBy, contents} = board; //비구조화 할당
    const onChange = (event) => {
        const {value, name} = event.target; //event.target에서 name과 value만 가져오기
        setBoard({
            ...board,       // 기존 board값 가져오기
            [name]: value,  // name을 key로 값이 있는 것들만 변경, 값이 없으면 기존 board에 있는 값 사용
        });
    };
    const saveBoard = async () => {
        //유효성 검사
        if(!title || !createdBy || !contents){
            alert("모든 필드를 입력해주세요.")
            return;
        }
        await axios.post("http://localhost:8080/board", board).then((res) => {
            alert("등록되었습니다.");
            navigate("/board");
        }).catch((error) => {
            console.error(error);
            alert("등록에 실패하였습니다.");
            navigate("/board");
        });
    };
    const backToList = () => {
        navigate("/board");
    }

    return (
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange} />
            </div>
            <br/>
            <div>
                <span>작성자</span>
                <input type="text" name="createdBy" value={createdBy} onChange={onChange} />
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea name="contents" cols="30" rows="10" value={contents} onChange={onChange} ></textarea>
            </div>
            <br/>
            <div>
                <button onClick={saveBoard}>저장</button>
                <button onClick={backToList}>취소</button>
            </div>
        </div>
    )
}

export default BoardWrite;