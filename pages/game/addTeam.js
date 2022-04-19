import style from '../common/style/table.module.css'

export default function AddTeam(){
    const handleSubmit = e => {
        e.preventDefault()
        alert(`등록할 팀 정보 : `)
    }
    return (<>
        <div className={style.container}>
            <form action="">
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamId">팀 ID</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="teamid" name="teamid"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="home">연고지</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="home" name="home"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="teamname">팀명</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="teamname" name="teamname"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="orgyyyy">창단년도</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="orgyyyy" name="orgyyyy"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="stadiumname">스타디움 명칭</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="stadiumname" name="stadiumname"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="address">주소</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="address" name="address"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                    <label className={style.label} htmlFor="tel">전화번호</label>
                </div>
                <div className={style.col75}>
                    <input type="text" className={style.inputText} id="tel" name="tel"/>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                value="Submit"/>
            </div>
            </form>
            </div>
    </>)
}