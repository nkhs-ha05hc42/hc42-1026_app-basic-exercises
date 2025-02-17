const createRecord = async (inputBody) => {
    const fetchResult = await fetch("http://localhost:3000/api/9-7", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
    },
    body: JSON.stringify(inputBody),
    })
    const responsce = await fetchResult.json()
    if (responsce.status !== "success") {
        throw new Error(responsce.status)
    }
    alert("登録が完了しました！")
}
const getFormData = () => {
    const inputFormElement = document.getElementById("input-form").elements
    const ID = parseInt(inputFormElement.ID.value)
    const UserID = parseInt(inputFormElement.UserID.value)
    const Year= parseInt(inputFormElement.Year.value)
    const Month = parseInt(inputFormElement.Month.value)
    const Day = parseInt(inputFormElement.Day.value)
    const Name = inputFormElement.Name.value
    const Score = parseInt(inputFormElement.Score.value)

    if (!ID) {
        throw new Error("IDは必須です")
    }
    if (!UserID) {
        throw new Error("ユーザーIDは必須です")
    }
    if (!Year) {
        throw new Error("年は必須です")
    }
    if (!Month) {
        throw new Error("月は必須です")
    }
    if (!Day) {
        throw new Error("日にちは必須です")
    }
    if (!Name) {
        throw new Error("名前は必須です")
    }
    if (!Score) {
        throw new Error("点数は必須です")
    }
    return {
        ID,
        UserID,
        Year,
        Month,
        Day,
        Name,
        Score
    }
}
    
const clearFormData = () => {
    const inputFormElement = document.getElementById("input-form").elements
    inputFormElement.ID.value = ""
    inputFormElement.UserID.value = ""
    inputFormElement.Year.value = ""
    inputFormElement.Month.value = ""
    inputFormElement.Day.value = ""
    inputFormElement.Name.value = ""
    inputFormElement.Score.value = ""
}
    
/**
* ウィンドウ読み込み時の処理
*/
window.onload = () => {
    const createButtonElement = document.getElementById("create-button")
    createButtonElement.addEventListener(
    "click",
    async () => {
    try {
        const intutBody = getFormData()
        await createRecord(intutBody)
        clearFormData()
    } catch (err) {
        alert(err)
        }
    },
    false,
    )
}