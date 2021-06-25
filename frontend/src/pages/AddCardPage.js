export default function AddCardPage() {
    return(
    <form>
        <label>
            Title:
            <input type = "text" name = "title" />
        </label>
        <label>
            Description:
            <input type= "text" name= "description"/>
        </label>
        <label>
            Department:
            <select name="selectList" id="selectList">
                <option value="SALES">Sales</option>
                <option value="HR">HR</option>
            </select>
        </label>
    </form>
    )
}