let viewRecords = []

const loadRecords = async () => {
    const fetchResult = await fetch("http://localhost:3000/api/sample2", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
const responsce = await fetchResult.json()
if (responsce.status !== "success") {
    alert("Error!")
    return
}
    viewRecords = responsce.list
}

const viewTable = () => {
    const kadai98Body = document.getElementById("K9-8-body")
    kadai98Body.innerHTML = ""
    for (const record of viewRecords) {
        const tr = document.createElement("tr")

        kadai98Body.appendChild(tr)
        const IDTd = document.createElement("td")
        IDTd.appendChild(document.createTextNode(record.ID))
        tr.appendChild(IDTd)
        const NAMETd = document.createElement("td")
        NAMETd.appendChild(document.createTextNode(record.NAME))
        tr.appendChild(NAMETd)
        const AgeTd = document.createElement("td")
        AgeTd.appendChild(document.createTextNode(record.Age))
        tr.appendChild(AgeTd)
        const PostcodeTd = document.createElement("td")
        PostcodeTd.appendChild(document.createTextNode(record.Postcode))
        tr.appendChild(PostcodeTd)
        const AddressTd = document.createElement("td")
        AddressTd.appendChild(document.createTextNode(record.Address))
        tr.appendChild(AddressTd)
        const Average_scoreTd = document.createElement("td")
        Average_scoreTd.appendChild(document.createTextNode(record.Average_Score))
        tr.appendChild(Average_scoreTd)
    }
}

/**
* ウィンドウ読み込み時の処理
*/
window.onload = () => {
    const loadButtonElement = document.getElementById("load-button")
    loadButtonElement.addEventListener(
    "click",
    async () => {
    await loadRecords()
    viewTable()
    },
    false,
    )
    viewTable()
}